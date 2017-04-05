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
