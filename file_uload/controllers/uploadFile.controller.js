const User = require('../models/user.model')
const bcrypt = require('bcrypt')

exports.fileMulter = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 8);
        const file = req.file.path
        const filename =  req.file.filename
        const user  = await new User({ username:username, password:hashedPassword, imageUrl:file })
        await user.save()
        res.status(201).json({message :"registration done and one file uploaded"},user,filename)

    } catch (err) { next(err) }
}
exports.filesMulter = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 8);
        const files = req.files
        if(!files){return res.status(201).json({message :"registration done and files uploaded"})}
        const urls = files.map(file=>file.path)
        
        const user  = await new User({ username:username, password:hashedPassword, imageUrls:urls })
        await user.save()
        res.status(201).json({message :"registration done and files uploaded"},user)
        

    } catch (err) { next(err) }
}

exports.fileClould = async(req,res,next)=>{
    try{
        const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 8);
        const file = req.file.path
        const user  = await new User({ username:username, password:hashedPassword, imageUrl:file })
        await user.save()
        res.status(201).json({message :"registration done and one file uploaded on clould"})

    }catch(err){next(err)}
}

exports.filesClould = async(req,res,next)=>{
    try{
        const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 8);
        const files = req.files
        const urls = files.map(file=>file.path)
        const user  = await new User({ username:username, password:hashedPassword, imageUrls:urls })
        await user.save()
        res.status(201).json({message :"registration done and files uploaded on cloud"})

    }catch(err){next(err)}
}