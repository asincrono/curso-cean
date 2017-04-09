# Demo de Socket.io
En esta sección crearemos una aplicación de chat usando Express junto con el módulo Socket.io.

Para ello utilizaremos el módulo (del _core_) de Node.js [`http`](https://nodejs.org/dist/latest-v6.x/docs/api/http.html) junto con los módulos externos `socket.io` y `express`.

## Configuración de Socket.io y Express.
Para que [Socket.io](Socket.io) funcione integrado con [Express](http://expressjs.com/) deberemos seguir los siguientes pasos:

En primer lugar vamos a generar la aplicación Express, `app`, que consistirá en un [objeto app](http://expressjs.com/en/4x/api.html#app) que crearemos llamando a la función de primer nivel `express()` (exportada por el módulo Express). El objeto `app` de `Application` tendrá métodos para:
1. Enrutar HTTP requests (`app.[get|post|delete...]`).
2. Configurar _middleware_ (`app.route`).
3. Generar vistas HTML (`app.render`).
4. Registrar un motor de plantillas (`app.engine`).

Además de estas funciones, el objeto `app` **tembién se comportará como un `requestHandler`** (sinómimo de `requestListener`). Es decir, es podrá invocar como una función de _callback_ para el evento (del módulo `http`) `request`. Este evento `request` espera funciones de callback (asociadas mediante `on('request', [requestHandler])`) que acepten dos argumentos: [`request`](https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_class_http_incomingmessage) (`http.IncomingMessage`) y [`response`](https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_class_http_serverresponse) (`http.ServerResponse`).

```javascript
const app = require('express')()
```
Necesitaremos obtener también una instancia de `http.Server` que "envuelva" nuestra aplicación Express.

El objeto `server` se generá llamando a la función `createServer(requestListener)` o simplemente `Server(requestListener)`.
La función `createServer(requestListener)` del módulo `http` tiene el siguiente código fuente:
```javascript
function createServer(requestListener) {
  return new Server(requestListener);
}
```
donde `Server` se obtiene a partir de: 
```javascript
const server = require('_http_server');
const Server = server.Server;
```

Y la función `Server` del módulo `_http_server` contiene el código:
```javascript
if (requestListener) {
  this.on('request', requestListener) 
}
``` 
con el que añade el `requestListener` al evento `'request'`.

Por lo tanto, para añadir nuestra aplicación Express como `requestListener` de nuestro servidor http ejecutaremos el código:
```javascript
const server = require('http').Server(app)
```
Server será el objeto sobre el que llamaremos el método `listen(PORT_NUMBER)` para ponerlo a la escucha más adelante.

A continuación hemos de obtener nuestro objeto `socket.io` pasándole ser servidor `http`:
```javascript
const io = require('socket.io')(server)
```

`io` detectará el evento `connection` cada vez que se conecte un _socket_ cliente:

```javascript
io.on('connection', socket => {
  console.log('new user connected.')
})
```

## Socket en el servidor
Cada vez que un cliente se conecte, se generará un evento `'connection'`. Este evento tendrá asociada una función de _callback_ que recibirá el _socket_ que se ha conectado como argumento.

De este modo podremos establecer las acciones que se llevarán a cabo para los eventos que se produzcan en el _socket_ (desconexión, envío de datos, etc.).
```javascript
io.on('connection', socket => {
  console.log('new user connected.')
  // establecemos el comportamieno frente a eventos del socket.
  socket.on('disconnect', () => console.log('user disconnected.'))
  // establecemos respuestas a los distintos mensajes del socket.
  socket.on('chat msg', (data) => {
    console.log(`from: ${data.user}, msg: ${data.msg}.`)
  })
})
```

## Socket en el cliente
**Socket.io** generará automáticamente el código javascript que hemos de incluir en el cliente y lo exportará mediante la URL `/socket.io/socket.io.js`
```html
<script>
function() {
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  }) 
}()
</script>
```