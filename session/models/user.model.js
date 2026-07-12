const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    // username:{type:String,required:true},
    // email:{type:String,required:true,unique:true}
    // password:{type:String,required:true},
    // confirmPassword:{type:String,required:true,select:false},
    // // role:{type:String,required:true,enum:["admin","developer","user"]}
})

// userSchema.pre("save", async function (){
//     if(this.password !== this.confirmPassword){
//         throw new Error("no math between password and confirm password")
//     }
//     this.password = await bcrypt.hash(this.password,8)
//     this.confirmPassword = undefined

// })
// userSchema.comparePassword(async function(password){
//     await bcrypt.compare(password,this.password)
// })
module.exports = mongoose.model("User",userSchema)

