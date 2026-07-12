
const { Post } = require('../models')
class postRepo{
    async getAll(){
        return await Post.findAll()
    }

    async getById(id){
        return await Post.findByPK(id)
    }

    async createpost(data){
        return await Post.create(data)
    }

    async updatepost(id,data){
        const post = await Post.findByPK(id)
        if(!post){
             return new Error("not found")
        }
        return await post.update(data)
    }

    async deleteById(id){
        const post = await Post.findByPK(id)
        if(!post){
        throw new Error("not found")
        }
        return await post.destory()

    }
}
module.exports = new postRepo()