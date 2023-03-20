import { Request, RequestHandler, Response } from 'express'
import mssql from 'mssql'
import { v4 as uid } from 'uuid'
import DBconfig from '../Config/db-config'

// get all users
export const getAllUsers: RequestHandler = async (req, res) => {
    try {
        const pool = await mssql.connect(DBconfig)
        const users= await (await pool.request().execute('getAllUsers')).recordset
        res.status(200).json(users)

    } catch (error: any) {

        res.status(500).json(error.message)
    }
}

// Register Users




// Login User





// Update User



// Delete user