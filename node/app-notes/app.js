const PORT_NUMBER = process.env.PORT_NUMBER || 3001

const notes = require('./notes')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))

// create
app.post('/add_note', bodyParser.json(), (req, res) => {
  let note = notes.create(req.body.title, req.body.description)
  if (note) {
    res.send(`Created note ${note.title}: ${note.description}.`)
  } else {
    res.send('Note with that title already exists.')
  }
})

// retrieve
app.get('/note/:id', (req, res) => {
  let note = notes.retrieve(req.params.id)
  res.send(JSON.stringify(note))
})

// list
app.get('/notes', (req, res) => {
  if (notes.notes && notes.notes.length > 0) {
    res.send(JSON.stringify(notes.notes))
  } else {
    res.send('There are not any notes yet!')
  }
})

// update
app.patch('/note/:id', bodyParser.json(), (req, res) => {
  let id = req.params.id
  let title = req.body.title
  let description = req.body.description
  notes.update(id, title, description)
  res.send(`Updated note ${id}, as "${title}: ${description}"`)
})

// delete
app.delete('/note/:id', (req, res) => {
  let note = notes.del(req.params.id)
  if (note) {
    res.send(`Deleted note: ${note.id}\n${note.title}: ${note.description}`)
  } else {
    res.send(`Note not found (id: ${req.params.id}`)
  }
})

let server = app.listen(PORT_NUMBER, () => {
  console.log(`listening at ${PORT_NUMBER}`)
})

process.on('SIGTERM', () => {
  server.close(notes.save)
})
