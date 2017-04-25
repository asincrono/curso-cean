exports.valor = 'Un valor inicial'

console.log('(tres.js) Haciendo cosas de módulos.\n')
exports.checkpointZero = true

console.log('(tres.js) voy a requerir "uno.js".\n')
require('./uno.js')

exports.checkpointOne = true

console.log('(tres.js) voy a requerir "dos.js".\n')
require('./dos.js')

exports.checkpointTwo = true

console.log('(tres.js) ya no que queda nada por hacer.\n')
