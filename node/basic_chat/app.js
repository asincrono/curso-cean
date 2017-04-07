const PORT_NUMBER = process.env.PORT_NUMBER || 3001
const path = require('path')

// Generamos la aplicación express
const app = require('express')()

// Generamos el servidor pasándole app ()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'chat-front.html')))

io.on('connection', socket => {
  console.log('Client connected')
  socket.on('new_user', (data) => {
    console.log(`New user: ${data.username}`)
    socket.emit('ok')
  })
})

server.listen(PORT_NUMBER, () => console.log(`Listening at ${PORT_NUMBER}...`))
