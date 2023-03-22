import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
import ejs from 'ejs'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

// creating a transport and configurations

function createTransporter(config: any) {
    return nodemailer.createTransport(config)
}



let config = {

    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }

}

const sendMail = async (messageOptions: any) => {

    let transporter = createTransporter(config)
    await transporter.verify()
    await transporter.sendMail(messageOptions, (error, info) => {
    
        console.log(info.response);
    })

}

export default sendMail