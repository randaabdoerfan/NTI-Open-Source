const io = require('socket.io-client')
const socket = io('http://127.0.0.1:3000')

socket.on('connect', () => {
    console.log(`client on ${socket.id}`)
    const id_client2 = socket.id

    socket.emit('msg', {id:"c2",socketId:socket.id})
    socket.on('request', (message) => {
        console.log(`response : ${message}`)
    })

    socket.emit('join_room', 'project')
    socket.on('chat', (data) => {
        console.log(`${data.sender} say : ${data.msg} from room ${data.room}`)
    })

    socket.emit('chat', { room: "project", msg: "hi, I'm client two" })
    socket.on('privateMsg',(data)=>{
        console.log(`${data.from} : ${data.msg}`)
    })
})



