const express = require('express')
const io = require('socket.io')

const app = express()

const PORT_NUMBER = process.env.PORT_NUMBER || 3001

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './chat-front.html')))

let server = app.listen(PORT_NUMBER, () => console.log(`Listenint at ${PORT_NUMBER}...`))
