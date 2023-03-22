import ejs from 'ejs'
import path from 'path'
import sendMail from '../Helpers/email';
import mssql from 'mssql'
import DBconfig from '../config';

interface User {

    userId :string
    username:string 
    email :string
    password :string
    timeCreated :Date
    is_admin :boolean
    is_deleted:boolean
    welcome_sent :boolean
    forgot_sent :boolean
}

const sendWelcomeEmail = async()=>{

    const pool = await mssql.connect(DBconfig)
    const users:User[]= await(await pool.request().query('SELECT * FROM users WHERE welcome_sent=0')).recordset

    for(let user of users){
        ejs.renderFile(path.resolve(__dirname,'Templates/registration.ejs'),{name:user.username}, async(error, html)=>{

            const message = {
                from: process.env.EMAIL,
                to: user.email,
                subject: "Welcome to Kodehack",
                html:` <img src='dignited.com/wp-content/uploads/2022/08/top10lan.jpg' style="width: 100%;"><br><h5>Hi ${user.username}</h5><p>Welcome to Kodehack</p> `
                
            };
             
           try {
            await sendMail(message) 
            await pool.request().query(`UPDATE users SET welcome_sent=1 WHERE userId='${user.userId}' `)
           } catch (error) {
            
           }
        }) 

    }
}

export default sendWelcomeEmail









