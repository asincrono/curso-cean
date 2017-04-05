const fs = require('fs')
const notesFile = fs.openSync('./notes.txt', 'a+')

module.exports = {
  add: (notesList, title, description) => {
    if (notesList.find(value => value.title === title)) {
      return notesList
    }

    let note = {
      title: title,
      description: description
    }

    notesList.push(note)
    return notesList
  },
  del: (notesList, title) => {
    let idx = notesList.findIndex(value => value.title === title)
    if (idx) {
      notesList.splice(idx, 1)
    }
    return notesList
  },
  get: (notesList, title) => notesList.find((value) => value.title === title),
  save: (notesList) => fs.writeSync(notesFile, JSON.stringify(notesList)),
  load: () => JSON.parse(fs.readFileSync(notesFile, 'utf8')),
  update: (notesList, title, description) => {
    let idx = notesList.findIndex(value => value.title === title)
    if (idx) {
      let newNote = {title, description}
      notesList.splice(idx, 1, newNote)
    }
    return notesList
  }
}
