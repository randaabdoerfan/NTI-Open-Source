const mongoose = require('mongoose')
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const User = require('./models/user.model')
const Msg = require('./models/msg.model')
const Room = require('./models/room.model')

const app = express()
app.use(cors())
const httpserver = http.createServer(app)
const io = new Server(httpserver)

 try {
    mongoose.connect("mongodb://127.0.0.1:27017/chatlive");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }

io.on('connection',(socket)=>{
    console.log("a user connected with id",socket.id)
    socket.on('register',async(username)=>{
        socket.name = username
        console.log(`${socket.name} with ${socket.id} is online`)

        await User.findOneAndUpdate(
          {username},{username,socketId:socket.id,online:true},
          {upsert:true})
          const queue = await Msg.find({recevier:username,isbeensend:false})

          queue.forEach(msg => {
            socket.emit('private_msg',msg)
          });
          await Msg.updateMany({recevier:username},{isbeensend:true})    


    })
    socket.on('private_msg',async({recevier,msg_body})=>{
      const sender = socket.name
      const recevieOne = await User.findOne({username:recevier})
      const message = await Msg.create(
        {
          sender:sender,
          recevier:recevier,
          msg_body:msg_body,
          isbeensend:false  // i can not send it  cause it by default false
        } 
      )
      if(recevieOne && recevieOne.online){
        io.to(recevieOne.socketId).emit('private_msg',message)
        message.isbeensend = true
        await message.save()
      }

    })
    socket.on('disconnect',async()=>{
      const user = await User.updateOne(
        {socketId:socket.id},
        {online:false}
      )

      console.log(`${socket.id} is unavalible now`)

    })
    socket.on('join_room',(roomName)=>{
      socket.join(roomName)
      console.log( `${socket.name}:${socket.id} is joined ${roomName} Room `)
    })
    socket.on('msg_room',async({roomName, msg_body})=>{
      const sender = socket.name
      const userSender = await User.findOne({username:sender})

      if(userSender){
      const lastMsg = {sender, msg_body, isbeensend:false}
           const room = await Room.findOneAndUpdate(
        {roomName:roomName},
       {roomName,
        $addToSet:{members : userSender._id,usersname:userSender.username},
        $push:{msg:lastMsg},
       },
        // {roomName,members : userSender._id,
        // msg:lastMsg},
        {upsert:true,new:true} )

     const roomOnline = await Room.findOne({roomName}).populate('members')

     for (const member of roomOnline.members){
      if(member.online)
        console.log(`${member} is online and receive message...`)
        lastMsg.isbeensend= true
        await room.save()
     }
     io.to(roomName).emit('msg_room',room)

    }

    })
    
})
app.get('/getmsg',(req,res)=>{
            res.sendFile(__dirname +"/index.html")
        })
   httpserver.listen(8000,()=>{
    console.log("server run")
   })

