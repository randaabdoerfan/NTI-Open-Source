const fs = require("fs");
let {db} = require('../index.js')
let posts = db.posts
// console.log(db)
// console.log(posts)


const createPost = (req,res)=>{
    const newPost ={
        id:posts.length +1,
        userId:req.body.userId,
        title:req.body.title
    }
    posts.push(newPost)
    res.status(201).json(posts)
    fs.writeFileSync('./file.json',JSON.stringify(db,null,2))
}

const deletePost  = (req,res)=>{
    const id = parseInt(req.params.id)
    const index = posts.findIndex(p=>p.id === id)
    const post = posts.splice(index,1)
    res.status(200).json(post)
    fs.writeFileSync("./file.json",JSON.stringify(db,null,2))
}

const filterPosts = (req,res)=>{
    if(req.query.title){
        const posttitle = req.query.title
        const FilterPosts = posts.filter(p=>p.title === posttitle)
        res.status(200).json(FilterPosts)

    }
//    res.status(200).json(req.query.title)
    res.status(200).json(posts)
}

const getAllPosts = (req,res)=>{
    res.status(200).json(posts)
}

const getPostById =(req,res)=>{
    const index = parseInt( req.params.id)
    const post = posts.find(p=>p.id === index)

 res.status(200).json(post)
}

const patchPost = (req,res)=>{
    const id = parseInt(req.params.id)
    const post = posts.find(p=>p.id === id)
    
    if(req.body.userId !== undefined){
        post.userId = req.body.userId
    }
    if(req.body.title !== undefined){
        post.title = req.body.title
    }
    res.status(200).json(post)
    fs.writeFileSync("./file.json",JSON.stringify(db,null,2))
} 

const putPost = (req,res)=>{
    const id = parseInt(req.params.id)
    const post = posts.find(p=>p.id === id)
    post.userId = req.body.userId
    post.title = req.body.title
    res.status(200).json(post)
    fs.writeFileSync("./file.json",JSON.stringify(db,null,2))
}

module.exports={createPost,deletePost,filterPosts,getAllPosts,patchPost,putPost,getPostById}