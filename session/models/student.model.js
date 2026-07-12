const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const studentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true })

studentSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 8)
})
module.exports = mongoose.model("Student", studentSchema)