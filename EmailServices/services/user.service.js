const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const emailServices = require('./email.service')

exports.register =async(data)=>{
    const {name,email,password} = data
    const exist = await User.findOne({email})
    if(exist){throw new Error('user already exists')}
    const user = await User.create({name,email,password})

    const token = jwt.sign({userId:user._id,type:'welcomeMessage'},process.env.secert_key,{expiresIn:'1h'})
    await emailServices.welcomeEmail(email,name)

    const VerifyToken = jwt.sign({userId:user._id,type:'verify'},process.env.secert_key,{expiresIn:'1d'})  
    await emailServices.sendVerify(user.email,VerifyToken)

    return user
}
exports.responseVerify= async(id)=>{
    const user = await User.findById(id)
    if(!user){
        throw new Error('User Not Found')
    }
    user.confirmEmail = true
    await user.save()
}
exports.resetpassword=async(email)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error("user not found")
        const tokenreset = jwt.sign({userid:user._id,type:"reset"},process.env.jwt_secret,
    {expiresIn:"15m"}
)
await emailServices.resetpassword(email,tokenreset)
}
exports.changepassword=async(userid,newpassword)=>{
    const user = await User.findById(userid)
    user.password=newpassword
    await user.save()

}
