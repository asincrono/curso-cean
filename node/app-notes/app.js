const notes = require('./notes')
let command = process.argv[2]

switch (command) {
  case 'add':
    notes.addNote('Hey!')
    break
  case 'read':
    break
  case 'list':
    break
  case 'remove':
    break
  default:
    console.log(`Command not valid: "${command}"`)
    break
}
