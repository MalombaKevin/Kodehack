import { Request, RequestHandler, Response } from 'express'
import mssql from 'mssql'
import { v4 as uid } from 'uuid'
import DBconfig from '../Config/db-config'
import { Answer } from '../Models'

interface ExtendedRequest extends Request {

    body: { answer: string,questionId: string,userId: string }
    params: { id: string }

}


// get all answers controller
export const getAllAnswers: RequestHandler = async (req, res) => {
    try {
        const pool = await mssql.connect(DBconfig)
        const answers = await (await pool.request().execute('getAllAnswers')).recordset
        res.status(200).json(answers)

    } catch (error: any) {

        res.status(404).json(error.message)
    }
}


// get one answer

export const getOneAnswer = async (req: ExtendedRequest, res: Response) => {

    try {
        const id = req.params.id
        const pool = await mssql.connect(DBconfig)
        const answer: Answer[] = await (await pool.request()

            .input('id', id)
            .execute('getAnswersById')

        ).recordset[0]

        if (!answer) {
            res.status(400).json({ message: 'Question Not Found' })
        }
        res.status(201).json(answer)

    } catch (error: any) {

        res.status(404).json(error.message)
    }

}

// Add an answer
export async function addAnswer(req: ExtendedRequest, res: Response) {

    try {
        const answerId = uid()
        const { answer, userId, questionId } = req.body
        const pool = await mssql.connect(DBconfig)
        await pool.request()

            .input('id', answerId)
            .input('answer', answer) 
            .input('questionId', questionId)           
            .input('userId', userId)           
            .execute('InsertUpdateAnswer')

            res.status(201).json(({ message: 'Answer Added Successfully' }))

    } catch (error: any) {

        res.status(500).json(error.message)
    }


}
// update answer controller
export async function updateAnswer(req: ExtendedRequest, res: Response) {

    try {
        const { answer, userId, questionId } = req.body
        const pool = await mssql.connect(DBconfig)

        const oneAnswer: Answer[] = await (await pool.request()

            .input('id', req.params.id)
            .execute('getAnswersById')

        ).recordset[0]

        if (oneAnswer) {
            await pool.request()

            .input('id', req.params.id)
            .input('answer', answer) 
            .input('questionId', questionId)           
            .input('userId', userId)           
            .execute('InsertUpdateAnswer')

            return res.status(201).json(({ message: 'Question Updated' }))
        }

        res.status(404).json(({ error: 'Question Not Found' }))



    } catch (error: any) {

        res.status(500).json(error.message)
    }

}










// delete answer

export const deleteAnswer = async (req: ExtendedRequest, res: Response) => {

    try {
        const pool = await mssql.connect(DBconfig)

        const oneAnswer: Answer[] = await (await pool.request()
            .input('id', req.params.id)
            .execute('getAnswersById')
        ).recordset[0]

        if (oneAnswer) {

            await pool.request().input('id', req.params.id).execute('deleteAnswer')

            return res.status(201).json(({ message: 'Answer Deleted' }))
        }

        res.status(404).json(({ error: 'Answer Not Found' }))



    } catch (error: any) {

        res.status(500).json(error.message)
    }

}
