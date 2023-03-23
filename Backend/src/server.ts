import express, { json } from 'express'
import cors from 'cors'
import questionsRouter from './Routers/question'
import answersRouter from './Routers/answers'
import commentsRouter from './Routers/comments'
import usersRouter from './Routers/users'
import registerRouter from './Routers/auth'

const app = express() 

app.use(json()) 
app.use(cors()) 
app.use('/kodehack/question', questionsRouter) 
app.use('/kodehack/answer', answersRouter) 
app.use('/kodehack/comments', commentsRouter) 
app.use('/kodehack/users', usersRouter) 
app.use('/kodehack/auth', registerRouter) 

app.listen(5000,()=>{

    console.log('Kodehack Backend is running');    
}) 
