class Cosa {
  constructor (value) {
    this.value = value
  }
}

const cosa1 = new Cosa(1)
const cosa2 = new Cosa(1)

if (cosa1 == cosa2) {
  console.log('"==" dice que son iguales.')
} else {
  console.log('"==" dice que son distintos.')
}

if (cosa1 === cosa2) {
  console.log('"===" dice que son iguales.')
} else {
  console.log('"===" dice que son distintos.')
}

console.log(cosa1)
console.log(cosa1)

// Modulos.

const moduloDeUno = require('./uno/uno.js')
const moduloDeDos = require('./uno/dos/dos.js')

console.log(`Son el mismo (usamos "==")? ${moduloDeUno == moduloDeDos}`)
console.log(`De verdad de la buena (usamos "===")? ${moduloDeUno === moduloDeDos}`)
console.log(`Y el módulo cargado (aquí) fue: ${require('./modulo.js').valor}.`)