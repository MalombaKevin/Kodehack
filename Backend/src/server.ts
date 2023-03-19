import express, { json } from 'express'
import questionsRouter from './Routers/question'
import answersRouter from './Routers/answers'
import commentsRouter from './Routers/comments'

const app = express() 

app.use(json()) 

app.use('/kodehack/question', questionsRouter) 
app.use('/kodehack/answer', answersRouter) 
app.use('/kodehack/comments', commentsRouter) 

app.listen(5000,()=>{

    console.log('Kodehack Backend is running');    
}) 
