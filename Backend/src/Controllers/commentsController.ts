import { Request, RequestHandler, Response } from 'express'
import mssql from 'mssql'
import { v4 as uid } from 'uuid'
import DBconfig from '../Config/db-config'

interface ExtendedRequest extends Request {

    body: { comment: string, timeCreated: Date, userId: string, answerId: string }
    params: { id: string }

}



// get all answers controller
export const getAllComments: RequestHandler = async (req, res) => {
    try {
        const pool = await mssql.connect(DBconfig)
        const answers= await (await pool.request().execute('getAllComments')).recordset
        res.status(200).json(answers)

    } catch (error: any) {

        res.status(404).json(error.message)
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