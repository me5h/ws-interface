
const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on('connection', (socket) => {
  socket.on('checkbox', checkvalue => {
    io.emit('checkbox', checkvalue);
  });
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

