const cluster = require('cluster')

function addUser (users, userName) {
  let user = users.find((value) => value === userName)
  if (!user) {
    users.push(userName)
  }
  return users
}

function parseMessage (message) {
  let words = message.split()
  switch (words[0]) {
    case '/j':
      return {
        command: 'join',
        room: words[1]
      }
    default:
      return {
        command: 'msg',
        message: message
      }
  }
}

if (cluster.isMaster) {
  let numWorkers = require('os').cpus().length
  for (let i = 0; i < numWorkers; i += 1) {
    cluster.fork()
  }

  cluster.on('online', worker => console.log(`Worker ${worker.process.pid} online`))
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Woker ${worker.process.pid} exited with code ${code} due to signal ${signal}`)
  })
} else {
  const PORT_NUMBER = process.env.PORT_NUMBER || 3001
  const path = require('path')

  // Generamos la aplicación express
  const app = require('express')()

  // Generamos el servidor pasándole app ()
  const server = require('http').Server(app)
  const io = require('socket.io')(server)

  const users = []

  app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'chat-front.html')))

  io.on('connection', socket => {
    console.log('Client connected')
    socket.on('new user', (data) => {
      console.log(`New user: ${data.username}`)
      console.log(socket.rooms)
      addUser(users, data.username)
      socket.emit('ok')
      io.emit('user change', {users})
    })

    socket.on('chat message', (data) => {
      console.log(`message recived: ${data.message}`)
      let message = parseMessage(data.message)
      switch (message.command) {
        case 'msg':
          io.emit('chat message', {message: data.message})
          break
        case 'join':
          socket.join(message.room)
          break
        default:
      }
    })
  })

  server.listen(PORT_NUMBER, () => console.log(`Listening at ${PORT_NUMBER}...`))
}
