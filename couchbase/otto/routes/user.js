const express = require('express')
const router = new express.Router()

const bodyParser = require('body-parser')
// const urlEncodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()

const User = require('./../models/user')

router.post('/', jsonParser, (req, res) => {
  console.log(User.schema.store)

  let data = {
    name: {
      first: req.body.name.first,
      last: req.body.name.last
    },
    email: req.body.email
  }

  User.create(data, (err, mdlInst) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).send(mdlInst)
    }
  })
})

module.exports = router
