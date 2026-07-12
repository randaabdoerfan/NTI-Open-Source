const postServices = require('../services/post.services')
const {Post} = require('../models')
const {User} = require('../models')

exports.getall = async(req,res)=>{
    try{
        const posts = await postServices.getAll()
        res.status(200).json(posts)

    }catch(err){console.error(err,err.message)}
}
exports.getbyid= async(req,res)=>{
    try{
    const post = await postServices.getbyid(req.params.id)
        res.status(200).json(post)
    }catch(err){console.error(err)}

}
exports.createpost = async(req,res)=>{
    try{
         console.log(req.body)
        const newpost = await postServices.createpost(req.body)
        console.log(req.body)
        res.status(201).json(newpost)

    }catch(err){console.error(err,err.message)}
}
exports.updatepost = async(req,res)=>{
    try{
        const updatedpost = await postServices.updatepost(req.params.id,req.body)
        res.status(200).json(updatedpost)
    }catch(err){console.error(err)}
}
exports.deletepost = async(req,res)=>{
    try{
        const post = await postServices.deletepost(req.params.id)
        res.status(200).json(post)

    }catch(err){console.error(err)}
}
exports.getPostWithUser = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user'
                }
            ]
        });

        res.status(200).json(post);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};