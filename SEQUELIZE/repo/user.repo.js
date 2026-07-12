
const {User} = require('../models')
class userRepo{
    async getAll(){
        return await User.findAll()
    }

    async getById(id){
        return await User.findByPk(id)
    }

    async createuser(data){
        if(data){
        return await User.create(data)
        }
    }

    async updateuser(id,data){
        const user = await User.findByPk(id)
        if(!user){
             throw new Error("not found")
        }
        return await user.update(data)
    }

    async deleteById(id){
        const user = await User.findByPk(id)
        if(!user){
        throw new Error("not found")
        }
        return await user.destroy()

    }
}
module.exports = new userRepo()