
const express = require('express')
const app = express()
const socketIO = require('socket.io')
const server = express()
const io = socketIO(server);

const port = 3000;

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
  res.render('index', { text: 'This is EJS'})
})
app.use((req, res) => res.sendFile(INDEX, { root: __dirname }))
app.listen(port, () => console.info(`Listening on port ${port}`))

io.on('connection', (socket) => {
  socket.on('checkbox', checkvalue => {
    io.emit('checkbox', checkvalue);
  });
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

