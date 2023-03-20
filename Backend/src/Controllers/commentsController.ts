import { Request, RequestHandler, Response } from 'express'
import mssql from 'mssql'
import { v4 as uid } from 'uuid'
import DBconfig from '../Config/db-config'

interface ExtendedRequest extends Request {

    body: { comment: string, timeCreated: Date, userId: string, answerId: string }
    params: { id: string }

}



// get all comments controller
export const getAllComments: RequestHandler = async (req, res) => {
    try {
        const pool = await mssql.connect(DBconfig)
        const answers= await (await pool.request().execute('getAllComments')).recordset
        res.status(200).json(answers)

    } catch (error: any) {

        res.status(404).json(error.message)
    }
}


// get one comment

export const getOneComment = async (req: ExtendedRequest, res: Response) => {

    try {
        const id = req.params.id
        const pool = await mssql.connect(DBconfig)
        const comment:Comment[] = await (await pool.request()

            .input('id', id)
            .execute('getCommentById')

        ).recordset[0]

        if (!comment) {
            res.status(400).json({ message: 'Comment Not Found' })
        }
        res.status(201).json(comment)

    } catch (error: any) {

        res.status(404).json(error.message)
    }

}












// Add comment
export async function addComment(req: ExtendedRequest, res: Response) {

    try {
        const commentId = uid()
        const { comment, timeCreated, userId, answerId } = req.body
        const pool = await mssql.connect(DBconfig)
        await pool.request()

            .input('id', commentId)
            .input('comment', comment) 
            .input('answerId', answerId)           
            .input('userId', userId)           
            .input('timeCreated', timeCreated)
            .execute('InsertUpdateComment')

            res.status(201).json(({ message: 'Comment Added Successfully' }))

    } catch (error: any) {

        res.status(500).json(error.message)
    }


}


// update answer controller
export async function updateComment(req: ExtendedRequest, res: Response) {

    try {
        const { comment, timeCreated, userId, answerId } = req.body
        const pool = await mssql.connect(DBconfig)

        const oneComment: Comment[] = await (await pool.request()

            .input('id', req.params.id)
            .execute('getCommentById')

        ).recordset[0]

        if (oneComment) {
            await pool.request()

            .input('id', req.params.id)
            .input('comment', comment) 
            .input('answerId', answerId)           
            .input('userId', userId)           
            .input('timeCreated', timeCreated)
            .execute('InsertUpdateComment')

            return res.status(201).json(({ message: 'Comment Updated' }))
        }

        res.status(404).json(({ error: 'Comment Not Found' }))



    } catch (error: any) {

        res.status(500).json(error.message)
    }

}











// delete Comment

export const deleteComment = async (req: ExtendedRequest, res: Response) => {

    try {
        const pool = await mssql.connect(DBconfig)

        const oneComment: Comment[] = await (await pool.request()
            .input('id', req.params.id)
            .execute('getCommentById')
        ).recordset[0]

        if (oneComment) {

            await pool.request().input('id', req.params.id).execute('deleteComment')

            return res.status(201).json(({ message: 'Comment Deleted' }))
        }

        res.status(404).json(({ error: 'Answer Not Found' }))



    } catch (error: any) {

        res.status(500).json(error.message)
    }

}