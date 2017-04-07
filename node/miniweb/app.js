/*
const http = require('http')

const HOSTNAME = '127.0.0.1'
const PORT_NUMBER = 1337

const server = http.createServer((req, resp) => {
  resp.writeHead(200, {'Content-Type': 'text/plain'})
  resp.end('Hola y adios.')
})

server.listen(PORT_NUMBER, HOSTNAME,
  () => console.log(`Server ${HOSTNAME} listening at ${PORT_NUMBER}`)
)
*/
const express = require('express')

const bodyParser = require('body-parser')

const PORT_NUMBER = process.env.PORT_NUMBER || 3000


// This will create the server.
let app = express()


// Setting common to all requests => middleware.
app.use('/', (req, res, next) => {
  console.log('Common response')
  next()
})

app.use('/add_user', bodyParser.json())

// Setting get responses.
app.get('/', (req, res) => res.send('Response to GET'))

app.get('/note/:id', (req, res, next) => {
  let id = req.params.id
  console.log(`Selected id = ${id}`)
  next()
})


// Setting post responses.
app.post('/', (req, res) => res.send('Response to POST'))

app.post('/add_user', (req, res) => {
  res.send(`adding user ${req.body.name} (birthday ${req.body.birthday})`)
})

// Now we set it to listen.
app.listen(PORT_NUMBER, () => {
  console.log(`Listening at ${PORT_NUMBER}...`)
})

