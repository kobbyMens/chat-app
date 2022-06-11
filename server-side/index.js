
const express = require('express');
const server = require('http').createServer(express);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})

const router = require('./router');
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js');
const app = express()


io.on('connection', (socket) => {
    console.log("user connected")
 
    socket.on('join', (data, callback) => {
        console.log('user joining')
         const {error, user} = addUser({id: socket.id, name: data.name, room: data.room})
         if(error) {
             return callback(error)
         }
         socket.emit('message', {user: 'admin', text: `${user.name}, welcome to room ${user.room}`});
         socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} joined!`});
         socket.join(user.room);
         
        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
        callback()
    });

    socket.on('disconnect', reason => {
        console.log('user disconnected')
        const user = removeUser(socket.id);
        io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left`});
        });    
    
    socket.on('leave room', (data) => {
        socket.leave(data.room)
    })
   
    socket.on('sendMessage', (data, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', {user: user.name, text: data.message});
        //io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
        callback()
    });
   
});
app.use(router)




