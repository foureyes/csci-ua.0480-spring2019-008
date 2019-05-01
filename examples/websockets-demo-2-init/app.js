const express = require('express');
const app = express();
app.use(express.static('public'));

const lunch = [];
// wrap our express app in an http server
const server = require('http').Server(app);

// mount our socket.io server
// gives us the io object (which represents server)
const io = require('socket.io')(server)
// io.emit --> send to everyone
// socket.emit --> send to connected client
// socket.broadcast.emit --> sends to everyone except connected client
io.on('connect', (socket) => {
  // socket represents connected client
  socket.emit('all lunches', lunch); 
  console.log('connected', socket.id);
  socket.on('lunch', (s) => {
    lunch.push(s);
    console.log(lunch);
    io.emit('lunch', s);
  });
});


// don't listen with express app, use server 
server.listen(3000);









