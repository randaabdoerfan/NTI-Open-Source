const transport = require('../config/email.config')

exports.welcomeEmail =async(email,name) =>{
    await transport.sendMail({
    from:'email',
    to:email,
    subject:'registration message',
    html:`<h2>welcome ,${name}</h2>`
        });
}

exports.sendVerify= async(email,token)=>{
    const link = `https://localhost:3000/auth/verify/${token}`
    await transport.verifyEmail({
        from:'email',
        to:email,
        subject:"Verify Your Email",
        html:`<a href=${link}>link to verify Email</a>`

    })
}
exports.resetpassword=async(email,token)=>{
    const link=`http://localhost:3000/auth/reset/${token}`
    await transporter.sendMail({
        from: "email",
        to:email,
        subject:"reset password",
        html:`<a href=${link}>reset password</a>`
    })
}


