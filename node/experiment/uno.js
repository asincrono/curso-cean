console.log('(uno.js) Voy a requerir "tres.js".\n')
const modulo = require('./tres.js')

console.log('(uno.js) --- ')
console.log(modulo)
console.log('(uno.js) --- \n')
module.exports = modulo

console.log('(uno.js) ya no me queda nada por hacer.\n')
