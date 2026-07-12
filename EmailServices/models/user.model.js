const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,minlength:7,maxlength:12},
    confirmEmail:{type:Boolean,default:false}
},{timestamps:true})
module.exports = mongoose.model('User',userSchema)