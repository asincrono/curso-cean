const argv = require('yargs').argv
const notes = require('./notes')

let notesList = []

switch (argv.c) {
  case 'add':
    notesList = notes.add(notesList, argv.t, argv.d)
    break
  case 'read':
    notes.get(notesList, argv.t)
    break
  case 'list':
    notes.getAll(notesList)
    break
  case 'remove':
    notesList = notes.del(notesList, argv.t)
    break
  default:
    console.log(`Command not valid: "${argv.c}"`)
    break
}
