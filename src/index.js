const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();

const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket) => {
    console.log('New WebSocket Connection');

    socket.emit('message', 'Welcome!')

    socket.on('sendMessage', (message) => {
        io.emit('message', message);
    })

});

server.listen(port, () => {
    console.log('Server is running on port ' + port);
});
