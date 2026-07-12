const mongoose = require('mongoose')
const msgSchema = new mongoose.Schema({
    sender :String,
    recevier:String,
    msg_body:String,
    isbeensend:{type:Boolean,default:false},

})
module.exports = mongoose.model("Msg",msgSchema)
module.exports.schema = msgSchema