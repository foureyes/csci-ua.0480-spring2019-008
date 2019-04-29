const express = require('express');
const app = express();

// socket.io setup
// wrap ur app in an http server object
const server = require('http').Server(app);
// mount a websocket server by passing in ur http server to socket.io require
const io = require('socket.io')(server);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', sock => {
  console..log(sock.id, 'has connected');`
});

app.listen(3000);
