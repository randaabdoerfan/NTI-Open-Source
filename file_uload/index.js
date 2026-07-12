const express = require('express')
const mongoose = require('mongoose')
const handleError = require("./middleware/handleError.middleware");
const dotenv = require('dotenv')
const userRoute = require('./routes/user.route')
const config = dotenv.config({path:'./.env'})
const app = express()

mongoose.connect(process.env.mongo_url)
.then(()=>{console.log("Databse Connected..")})
.catch((err)=>{console.log(err)})

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/users',userRoute)
app.use(handleError)


app.listen(process.env.port,()=>{
    console.log("server running..")
// console.log("KEY:", process.env.api_key);
    // console.log(`${process.env.API_KEY} ${process.env.API_SECRET} ${process.env.CLOUD_NAME}`)
})