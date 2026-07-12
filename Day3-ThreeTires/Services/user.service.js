const userRepostistories = require('../repostiories/user.repostory')
const appError = require('../utilites/appError.js')
async function getAllUsers() {
    const users = await userRepostistories.getall()
    if(!users){
        throw appError("users not found",400)
    }
    
return users
}
async function getUserById(id) {
    const user = await userRepostistories.getbyId(id)
        if(!user){
        throw appError("user not found",400)
    }
    
return user
}
async function getUserByEmail(email) {
    const user = await userRepostistories.getbyId(email)
    if(!user){
        throw appError("user not found",400)
    }
return user
}

module.exports ={getAllUsers,getUserById,getUserByEmail}