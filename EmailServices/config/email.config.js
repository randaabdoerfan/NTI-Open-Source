const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port:587,
    secure: false,
    auth: {
        user: process.env.email_user,
        password: process.env.password_user,
    }
})
module.exports = transport