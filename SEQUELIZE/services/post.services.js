const postRepo = require('../repo/post.repo')
class postServices {
    async getAll(){
       return await postRepo.getAll()
    }
    async getbyid(id){
        return await postRepo.getById(id)
    }
    async updatepost(id,data){
        return await postRepo.updatepost(id,data)
    }
    async createpost(data){
        return await postRepo.createpost(data)
    }
    async deletepost(id){
        return await postRepo.deleteById(id)
    }


}

module.exports = new postServices()