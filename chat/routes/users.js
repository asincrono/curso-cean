const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

const User = require('./../schema/model/user')
const Message = require('./../schema/model/message')

/* GET users listing. */
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(users)
    }
  })
})

/* POST add user */
router.post('/', urlEncodedParser, (req, res) => {
  User.create({
    name: req.body.username,
    pass: req.body.password
  }, (err, user) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(user)
    }
  })
})

/* GET messages from user */
router.get('/:name/messages', (req, res) => {
  User.findByName(req.params.name, (err, user) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(user)
    }
  })
})

/* POST add message */
router.post('/:name/messages', urlEncodedParser, (req, res) => {
  User.findByName(req.params.name, (err, users) => {
    console.log(users[0])
    if (err) {
      res.status(404).send(err)
    } else {
      let msg = new Message({ text: req.body.text, chat: req.body.chat })
      users[0].messages.push(msg)
      users[0].save((err, result) => {
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(201).send(result)
        }
      })

      /*
      users[0].addMessage(msg, (err, result) => {
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(201).send(result)
        }
      })
      */
    }
  })
})

module.exports = router
