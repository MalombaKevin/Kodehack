import { Request, RequestHandler, Response } from 'express'
import mssql from 'mssql'
import { v4 as uid } from 'uuid'
import DBconfig from '../Config/db-config'
import { authSchema } from '../Helpers'
import Bcrypt from 'bcrypt'
import { User } from '../Models'

interface ExtendedRequest extends Request {

    body: {email: string, password: string}
    params: { id: string }

}


export async function RegisterUser(req:ExtendedRequest, res:Response){

  try {
    const id = uid() 
    const { email, password } = req.body

    const {error} = authSchema.validate(req.body)
    if (error) {           
       return res.status(422).json(error.details[0].message)
    } 

    const pool = await mssql.connect(DBconfig)

    const hashedPassword = await Bcrypt.hash(password,10) 
    await pool.request()
    .input('id', id)
    .input('email', email)
    .input('password', hashedPassword)
    .execute('InsertUpdateUser')

    res.status(400).json({ message: 'User Registered' })

  } catch (error) {
    res.status(500).json(error)
    
  }


}



export async function LoginUser(req:ExtendedRequest, res:Response){

 try {

  const { email, password } = req.body

  const {error} = authSchema.validate(req.body)
  if (error) {           
     return res.status(422).json(error.details[0].message)
  } 

  const pool = await mssql.connect(DBconfig)
  const user:User[] = await(await pool.request().input('email', email).execute('GetUserByEmail')).recordset

  console.log(user);
    
  if (!user[0]) {           
    return res.status(404).json({makosa:'User Not found'})
 } 

 const valid = await Bcrypt.compare(password, user[0].password)
  

 if(!valid){     
  return res.status(404).json({error:'password Not found'})
} 


res.status(200).json({message:'User Loggedin'})  
  
 } catch (error) {
  res.status(500).json(error)  
}

}