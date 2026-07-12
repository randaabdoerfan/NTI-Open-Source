const fs = require("fs");
let {db} = require("../index.js")
let users = db.users
// console.log(users)

const createUser = (req,res)=>{
    const newUser ={
        id:users.length +1, 
        name:req.body.name
    }
    users.push(newUser)
    res.status(201).json(users)
    // res.status(200).json(db)
    fs.writeFileSync('./file.json',JSON.stringify(db,null,2))
}

const deleteUser = (req,res)=>{
    const id = parseInt(req.params.id)
    const index = users.findIndex(u=>u.id === id)
    const user = users.splice(index,1)
    res.status(200).json(user)
    fs.writeFileSync("./file.json",JSON.stringify(db,null,2))
}

const filterUsers = (req,res)=>{ 
    if(req.query.name){
        const username = req.query.name
        const FilterUsers = users.filter(u=>u.name === username)
        res.status(200).json(FilterUsers)
    }
//    res.status(200).json(req.query.title)
    res.status(200).json(users)
}

const getAllUsers = (req,res)=>{
    res.status(200).json(users)
}

const getUserById = (req,res)=>{
    const index = parseInt( req.params.id)
    const user = users.find(u=>u.id === index)

 res.status(200).json(user)
}

const patchUser = (req,res)=>{
    const id = parseInt(req.params.id)
    const user = users.find(u=>u.id === id)
    if(req.body.name !== undefined){
        user.name = req.body.name
        res.status(200).json(user)
        fs.writeFileSync("./file.json",JSON.stringify(db,null,2))
    }else{
        res.status(404).json("NO Update")
    }
    
    
}

const putUser = (req,res)=>{
    const index = parseInt(req.params.id)
    const user = users.find(u=>u.id === index)
    user.name = req.body.name
    res.status(200).json(user)
    fs.writeFileSync("./file.json",JSON.stringify(db,null,2))
}

module.exports = {createUser,deleteUser,filterUsers,getAllUsers,getUserById,patchUser,putUser}

