console.log('(dos.js) Voy a requerir "tres.js".\n')
const modulo = require('./tres.js')

console.log('(dos.js) --- ')
console.log(modulo)
console.log('(dos.js) --- \n')

module.exports = modulo

console.log('(dos.js) ya no me queda nada por hacer.\n')
