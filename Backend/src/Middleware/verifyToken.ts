import { NextFunction, Request, RequestHandler, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../../env') })
import { DecodedData } from '../Models'
import jwt from 'jsonwebtoken'

interface ExtendedRequest extends Request{

    info?: DecodedData

}

export function verifyToken(req: ExtendedRequest, res: Response, next: NextFunction) {
    const token = req.headers['token'] as string

    console.log(req.header);
    

    try{
        if (!token) {
           return res.status(401).json({ error: 'Forbidden' })
        }

        const payloadData = jwt.verify(token, process.env.SECRETKEY as string) as DecodedData
        req.info=payloadData        
    }    

   catch (error: any) {
       return res.status(403).json(error.message)
    }

    next()
}

