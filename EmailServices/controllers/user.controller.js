const userService = require('../services/user.service')
const jwt = require('jsonwebtoken')


exports.Register = async(req,res)=>{
    try{
    // const {name,email,password} = req.body
    const user = await userService.register(req.body)
    res.status(201).json({
    message: "Registration Done",
    user
})
    }catch(err){console.log(err)}
}

exports.verifymail=async(req,res)=>{
       try{
    const id = req.usertoken.userId
    await userService.responseVerify(id)
    res.json({message:"verified email Done"})
}
    catch(err){console.log(err)}
}

exports.resetpassword=async(req,res)=>{
    try{
        await userService.resetpassword(req.body.email)
        res.json({message:"check your email to change password"})
    }catch(err){
        console.log(err)
    }
}
exports.changepassword=async(req,res)=>{
    try{
        const userid = req.usertoken.userId
        await userService.changepassword(userid,req.body.newpassword)
        res.json({message:"password reset Done"})
    }catch(err){
        console.log(err)
    }
}