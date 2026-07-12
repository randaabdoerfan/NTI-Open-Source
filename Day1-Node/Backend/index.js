// const fs = require("fs")
// fs.writeFileSync("./test.txt","\nranda erfan",{flag:"a"})
// factory function 
const express = require("express");
const app = express()  
const fs = require("fs");
const cors = require("cors")


const { title } = require("process");
 // object from express body of reqest
app.use(express.json());
app.use(cors())
const data = fs.readFileSync('./file.json','utf-8')
let db = JSON.parse(data)  
module.exports.db = db

const posts = db.posts
module.exports.posts = posts
const users = db.users 
module.exports.users = users

app.use("/posts",require("./Routes/route.posts.js"))
app.use("/users",require("./Routes/route.users.js"))

app.listen(3000,'127.0.0.1',()=>{
    console.log("server running...");
})