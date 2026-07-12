const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const appError = require('../utilites/appError')
const userSchema = new mongoose ({
    name:{type:String,
        required:[true,"the name is required"],
        minlength:[3,'the min length is 3'],
        maxlength:[10,'max length is 10']}
        ,
    email:{type:String,
        required:[true,"the email is required"],
        unique:[true,'this email is already exist'],
        match:[/^\S+@\S+\.\S+$/,'invaild email']
    },
    password:{type:String,
        required:[true,"the password is required"],
        minlength:[8,"min length is 8"]
    }
    ,confirmPassword:{type:String,
        required:[true,"the Confirm password is required"],
        minlength:[8,"min length is 8"],
        select:false
    },
    role: {type:String,
    enum:['dev','user','admin'],
    default:'user'},
},{timestamps:true})

userSchema.pre('save',async function(){
    if (this.password !== this.confirmPassword){
        throw appError("not match between password and conform password",400)
    }
    this.password = await bcrypt.hash(this.password,8)
    this.confirmPassword = undefined
})
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports = mongoose.model('User',userSchema)