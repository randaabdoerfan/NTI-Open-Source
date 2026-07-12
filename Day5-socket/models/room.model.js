const mongoose = require('mongoose')
const msgSchema = require('./msg.model')

const roomSchema = new mongoose.Schema({
    roomName: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    usersname:[String],
    msg: [msgSchema.schema]

})
module.exports = mongoose.model("Room", roomSchema)