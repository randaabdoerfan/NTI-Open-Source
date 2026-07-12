const userServices = require('../services/user.service')
const {User} = require('../models')
const {Post} = require('../models')

exports.getall = async(req,res)=>{
    try{
        const users = await userServices.getAll()
        res.status(200).json(users)

    }catch(err){console.error(err,err.message)}
}
exports.getbyid= async(req,res)=>{
    try{
    const user = await userServices.getbyid(req.params.id)
        res.status(200).json(user)
    }catch(err){console.error(err)}

}
exports.createuser = async(req,res)=>{
    try{
        const { name, email, gender } = req.body;
         console.log(req.body)
        const newuser = await userServices.createuser(req.body)
        console.log(req.body)
        res.status(201).json(newuser)

    }catch(err){console.error(err,err.message)}
}
exports.updateuser = async(req,res)=>{
    try{
        const udateduser = await userServices.updateUser(req.params.id,req.body)
        res.status(200).json(udateduser)
    }catch(err){console.error(err)}
}
exports.deleteuser = async(req,res)=>{
    try{
        const user = await userServices.deleteUser(req.params.id)
        res.status(200).json(user)

    }catch(err){console.error(err)}
}
exports.getposts = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: [
                {
                    model: Post,
                    as: 'posts'
                }
            ]
        });
        res.status(200).json(user);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

