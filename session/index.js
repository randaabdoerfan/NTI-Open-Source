const express = require('express')
const mongoose = require('mongoose')
const { SessionRedis } = require('./config/redisConnections')
const userRoutes = require('./controllers/user.controller')
const studentRoutes = require('./routes/student.route')
const courseRoutes = require('./routes/course.route')
mongoose.connect("mongodb://localhost:27017/SessionCookies")

    .then(() => { console.log("Database Done") })
    .catch((err) => { console.log(err) })

const server = express();
server.use(express.json());
server.use(SessionRedis);
server.use('/users', userRoutes)
server.use('/students',studentRoutes)
server.use('/courses',courseRoutes)

server.listen(3000, "127.0.0.1", () => {
    console.log("server is running")

})

