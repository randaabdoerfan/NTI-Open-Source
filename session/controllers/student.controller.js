const Student = require('../models/student.model')
const bcrypt = require('bcrypt')
exports.Register = async (req, res) => {
   try{
    req.session.destroy()
    res.clearCookie("connect.sid");
    const { username, email, password } = req.body
    const newUser = await Student.findOne({ email })
    if (newUser) { throw new Error("the email is already existed") }
    const user = await new Student({ username, email, password })
    await user.save()
    res.status(201).json({ message: "Registration Done Successfully" })
   }catch(err){console.log(err)}
}

exports.Login = async (req, res) => {
   try{
    const { email, password } = req.body
    const student = await Student.findOne({ email })
    if(!student){ throw new Error("student not found")}
    const match = await bcrypt.compare(password,student.password)
    if (!match) { throw new Error("wrong password") }
    req.session.student = {studentId:student._id,email:student.email}
    res.status(200).json({message:"login successfully ,welcome"})
   }catch(err){console.log(err)}
    
}
exports.Logout = async(req,res)=>{
   try{
     req.session.destroy()
    res.clearCookie("connect.sid");
    res.json({message:"logout Done successfully"})
   }catch(err){console.log(err)}
}