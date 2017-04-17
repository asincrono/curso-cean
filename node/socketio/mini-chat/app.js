const express = require('express')

// We create the express application: app.
const app = express()

/*
app is a function handler (res, req) we can supply to an HTTP server.

That app function handler will be added to the 'request' event
(which suppy two parameters request and response).
*/
const server = require('http').Server(app)

// we initalize a new instance of socket.io pasing the HTTP server.
const io = require('socket.io')(server)

const PORT_NUMBER = process.env.PORT_NUMBER || 3001

io.on('connection', socket => {
  console.log('Connected!')
})

server.listen(PORT_NUMBER, () => console.log(`Listening at ${PORT_NUMBER}`))
