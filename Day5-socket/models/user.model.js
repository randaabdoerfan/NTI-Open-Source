const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username :String,
    socketId:String,
    online:Boolean,
    rooms:[{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }]

})
module.exports = mongoose.model("User",userSchema)