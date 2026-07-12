const mongoose = require('mongoose')
const courseSchema =new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    ownerId:{type:mongoose.Schema.Types.ObjectId,ref:"Student",required:true}
},{timestamps:true})

module.exports = mongoose.model('Course',courseSchema)
