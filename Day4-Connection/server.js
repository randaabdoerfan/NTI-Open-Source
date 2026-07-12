const { Server } = require('socket.io')
const { createServer } = require('http')

const httpserver = createServer()
const io = new Server(httpserver)

let clients = []

io.on('connection', (socket) => {

    console.log(`hello from server on ${socket.id}`)
    socket.on('msg', (data) => {
        const id = data.id
        clients.push({id:data.id,socketId: data.socketId})
        console.log(clients)
    })
    socket.emit('request', `welcome ya client ${socket.id} `)
    // socket.broadcast.emit('broadcast',` ${socket.id} is online`)
    socket.on('join_room', (room) => {
        socket.join(room)
        console.log(`client ${socket.id} is joined to room ${room}`)
    })
    socket.on('chat', (data) => {
        io.to(data.room).emit('chat',
            {
                sender: socket.id,
                room: data.room,
                msg: data.msg
            }
        )})

    socket.on('privateMsg', (data) => {
        const c2 = clients.find(user=> user.id === 'c2')
        // console.log(c2)
        if (!c2) {
            console.log("client 2 not found");
            return;
        }
        if(c2){
        io.to(c2.socketId).emit("privateMsg", {
            from: socket.id,
            msg: data.msg
         })
        }

    })
})

httpserver.listen(3000, () => {
    console.log('server is listen')
})