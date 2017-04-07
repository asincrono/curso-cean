const fs = require('fs')
const notesFile = fs.openSync('./notes.txt', 'a+')
const notes = load()

let lastId = getLastId(notes)

function getLastId (notes) {
  return notes.reduce((maxId, crrVal) => {
    if (crrVal.id > maxId) {
      return crrVal.id
    }
    return maxId
  }, 0)
}

function load () {
  try {
    let notesStr = fs.readFileSync(notesFile, 'utf8')
    return JSON.parse(notesStr)
  } catch (error) {
    console.log(error)
  }
  return []
}

function save () {
  if (notes.length > 0) {
    fs.writeSync(notesFile, JSON.stringify(notes))
  }
}

function create (title, description) {
  if (notes.find(value => value.title === title)) {
    return notes
  }

  let note = {
    id: lastId + 1,
    title: title,
    description: description
  }

  lastId += 1

  notes.push(note)
  return note
}

function retrieve (id) {
  return notes.find((value) => value.id === id)
}

function retireveAll () {
  return notes
}

function update (id, title, description) {
  let idx = notes.findIndex(value => value.id === id)
  if (idx) {
    let newNote = {id, title, description}
    return notes.splice(idx, 1, newNote)
  }
  return false
}

function del (id) {
  let idx = notes.findIndex(value => value.id === id)
  if (idx) {
    return notes.splice(idx, 1)
  }

  return false
}

module.exports = {
  save,
  notes,
  create,
  retrieve,
  retireveAll,
  update,
  del
}
