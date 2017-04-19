const bodyParser = require('bodyparser')
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencodeparser({ extended: false })

const user = require('./user/user-model')

const express = require('express')
const router = new express.Router()

// Create
router.post('/', jsonParser, (req, res, next) => {
  if (req.body.name) {
    user.createAndSave(req.body.name.first, req.body.name.last, (err, done) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(201).send(done)
      }
    })
  } else {
    next()
  }
})

router.post('/', urlEncodedParser, (req, res) => {
  user.createAndSave(req.body.firstName, req.body.lastName, (err, done) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).send(done)
    }
  })
})

// Read & List
// List all.
router.get('/list', (req, res) => {
  user.find({}, (err, users) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).send(users)
    }
  })
})

// Read one (by id)
router.get('/:id', (req, res) => {
  user.find({ id: req.params.id }, (err, user) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).send(user)
    }
  })
})

module.exports = router
