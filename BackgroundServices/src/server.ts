import express from 'express'
import cron from 'node-cron'
import sendWelcomeEmail from './EmailService';



const app = express() 

cron.schedule('*/10 * * * * *', async() => {
  console.log('running a task 10 seconds');
  await sendWelcomeEmail() 

});

app.listen(4001, ()=>{

    console.log('Background service is running');  
    

    
    
}) 