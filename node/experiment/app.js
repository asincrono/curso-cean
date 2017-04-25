
console.log('(app.js) Voy a requerir "uno.js".\n')
const moduloDeUno = require('./uno.js')

console.log('(app.js) Voy a requerir "dos.js".\n')
const moduloDeDos = require('./dos.js')

console.log(`(app.js) ¿Son el mismo módulo? (usamos "==="): ${moduloDeUno === moduloDeDos}\n`)

console.log(`(app.js) Y el módulo cargado (aquí) fue:`)
console.log(require('./tres.js'))
