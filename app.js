const PORT = process.env.PORT || 3000;
const express = require('express')
const app = express()
const io = require('socket.io')();


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

const serverInstance = app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});

io.attach(serverInstance);

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

