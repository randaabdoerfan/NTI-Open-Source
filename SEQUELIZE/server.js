const express = require('express')

const app = express()
const routerusers = require('./routes/user.route')
const routerposts = require('./routes/post.route')

app.use(express.json());
app.use('/users' ,routerusers)
app.use('/posts' ,routerposts)


app.listen(3000,()=>{
    console.log("server running ...")
})