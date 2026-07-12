const User = require('../models/user.model')


async function getall() {
    return await User.find()
    
}
async function getbyId(id) {
    return await User.findById(id)
    
}
async function getbyemail(email) {
    return await User.findOne({email})
    
}
module.exports ={getall,getbyId,getbyemail}