const userService = require('../Services/user.service')

exports.getUsers=async(req,res,next)=>{
    try{
    const users = await userService.getAllUsers()
    res.json(users)
}catch(err){next(error)}
 
}
exports.getUserById=async(req,res,next)=>{
    try{
    const id = req.params.id
    const user = await userService.getUserById(id)
    res.json(user)
}catch(err){next(error)}
 
}
exports.getUserByEmail=async(req,res,next)=>{
    try{
    const email = req.query.email
    const user = await userService.getUserById(email)
    res.json(user)
}catch(err){next(error)}
 
}