const userRepo = require('../repo/user.repo')
class userServices {
    async getAll(){
       return await userRepo.getAll()
    }
    async getbyid(id){
        return await userRepo.getById(id)
    }
    async updateUser(id,data){
        return await userRepo.updateuser(id,data)
    }
    async createuser(data){
        return await userRepo.createuser(data)
    }
    async deleteUser(id){
        return await userRepo.deleteById(id)
    }


}

module.exports = new userServices()