# Experimento con `require` y módulos.

El programa principal es `app.js`. Desde éste se cargarán los módulos `uno.js` y `dos.js`.

## `uno.js`

Este módulo tiene como segunda instrucción `require('./tres.js')`.
A continuación muestra el _contenido_ del módulo `tres.js` devuelto.

`uno.js` exporta el módulo asociado al fichero `tres.js`.

## `dos.js`

Este módulo tiene como segunda instrucción `require('./tres.js')`.
A continuación muestra el _contenido_ del módulo `tres.js` devuelto.

`dos.js` exporta el módulo asociado al fichero `tres.js`.

## `tres.js`

Este módulo establece tres valores en su `exports`:
* `checkpointZero` justo al iniciar el módulo.
* `checkpointOne` justo después de llamar a `require('./uno.js')`.
* `checkpointTwo` justo después de llamar a `require('./dos.js)`.

## ¿Qué es lo que pasa?

1. `app.js` llama a `uno.js` y se crea objeto asociado a `uno.js` en la caché.
2. `uno.js` llama a `tres.js` y se crea objeto asociado a `tres.js` en la caché.
3. `tres.js` llama a `uno.js` y recibe el objeto (_inacabado_) de la caché.
4. `tres.js` llama a `dos.js` y se crea objeto asociado a `dos.js` en la caché.
5. `dos.js` llama a `tres.js` y recibe el objeto asociado (_inacabado_) de la caché.
6. `dos.js` muestra el contenido del objeto asociado a `tres.js`:
    1. `checkpointZero: true`
    2. `checkpointOne: true`
7. `dos.js` finaliza su ejecución.
8. `tres.js` finaliza su ejecución.
9. `uno.js` muestra el contenido objeto asociado a `tres.js` (_acabado_):
    1. `checkpointZero: true`
    2. `checkpointOne: true`
    3. `checkpointTow: true`
10. `uno.js` finaliza su ejecución.
11. `app.js` llama a `dos.js` recibe objeto de la caché.
12. `app.js` comprueba que los módulos exportados por `uno.js` y `dos.js` hacen referencia al mismo objeto (el objeto módulo asociado a `tres.js`).
13. `app.js` finaliza su ejecución.
14. ...
15. **¡Beneficios!**