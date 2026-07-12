const express = require('express')
const mongoose = require('mongoose')
const routerUser = require('./routes/user.route')
const dotenv = require('dotenv')
const config = dotenv.config({path:'./config/.env'})

const app = express()
app.use(express.json())
app.use('/auth',routerUser)

mongoose.connect(process.env.mongo_url)
.then(
    console.log('Database Created')
)
.catch((err)=>{console.log(err)})


app.listen(process.env.port,()=>{
    console.log("server running ..")
})
