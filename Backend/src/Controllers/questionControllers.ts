import { Request, RequestHandler, Response } from 'express'
import mssql from 'mssql'
import { v4 as uid } from 'uuid'
import DBconfig from '../Config/db-config'
import { questionSchema } from '../Helpers'
import { Question } from '../Models'

interface ExtendedRequest extends Request {

    body: { title: string, category: string, question: string }
    params: { id: string },
    info?:any

}


// get all questions controller
export const getAllQuestions: RequestHandler = async (req, res) => {
    try {
        const pool = await mssql.connect(DBconfig)
        const questions: Question[] = await (await pool.request().execute('getAllQuestions')).recordset
       return res.status(200).json(questions)

    } catch (error: any) {

        return res.status(404).json(error.message)
    }
}



export const getOneQuestion = async (req: ExtendedRequest, res: Response) => {

    try {
        const id = req.params.id
        const pool = await mssql.connect(DBconfig)
        const question: Question[] = await (await pool.request()

            .input('id', id)
            .execute('getQuestionById')

        ).recordset[0]

        if (!question) {
            res.status(400).json({ message: 'Question Not Found' })
        }
       return res.status(201).json(question)

    } catch (error: any) {

      return  res.status(404).json(error.message)
    }

}

// add questions controller
export async function addQuestion(req: ExtendedRequest, res: Response) {

    try {
        const questionId = uid()
        const { title, category, question} = req.body
        const userId = req.info.userId

        console.log(userId);
        

        const {error} = questionSchema.validate(req.body)
        if (error) {           
        return res.status(422).json(error.details[0].message)
        }

        const pool = await mssql.connect(DBconfig)
        await pool.request()

            .input('id', questionId)
            .input('title', title)
            .input('category', category)
            .input('question', question)
            .input('userId', userId)
            .execute('InsertUpdateQuestion')

     return   res.status(201).json(({ message: 'Question Added' }))

    } catch (error: any) {

      return  res.status(500).json(error.message)
    }


}

// update question controller
export async function updateQuestion(req: ExtendedRequest, res: Response) {

    try {
        const { title, category, question} = req.body

        const pool = await mssql.connect(DBconfig)

        const oneQuestion: Question[] = await (await pool.request()

            .input('id', req.params.id)
            .execute('getQuestionById')

        ).recordset[0]

        if (oneQuestion) {
            await pool.request()

                .input('id', req.params.id)
                .input('title', title)
                .input('category', category)
                .input('question', question)
                .execute('InsertUpdateQuestion')

            return res.status(201).json(({ message: 'Question Updated' }))
        }

       return res.status(404).json(({ error: 'Question Not Found' }))



    } catch (error: any) {

       return res.status(500).json(error.message)
    }

}

// Delete Question
export const deleteQuestion = async (req: ExtendedRequest, res: Response) => {

    try {
        const pool = await mssql.connect(DBconfig)

        const oneQuestion: Question[] = await (await pool.request()
            .input('id', req.params.id)
            .execute('getQuestionById')
        ).recordset[0]

        if (oneQuestion) {

            await pool.request().input('id', req.params.id).execute('deleteQuestion')

            return res.status(201).json(({ message: 'Question Deleted' }))
        }

        res.status(404).json(({ error: 'Question Not Found' }))



    } catch (error: any) {

        res.status(500).json(error.message)
    }

}


