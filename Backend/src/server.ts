import express, { json } from 'express'
import router from './Routers'

const app = express() 

app.use(json()) 

app.use('/kodehack', router) 

app.listen(5000,()=>{

    console.log('Kodehack Backend is running');    
}) 
