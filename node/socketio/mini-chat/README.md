# Integrando Socket.io y Express

Para usar Express y Socket.io juntos debemos incluir el siguiente código:
```javascript
const express = require('express')
const app = express()

const server = require('http').Server(app)

const io = require('socket.io')(server)

...

server.listen(PORT_NUMBER, () => console.log(`Listening at ${PORT_NUMBER}`))
```
En primer lugar importaremos expr
1. Importar express.
2. Crear nuestra app (que será un requestHanler)