const express = require('express')
const router = new express.Router()

const bodyParser = require('body-parser')
const encodedUrlParser = bodyParser.encodedUrlParser({ extended: false })

const post = require('./post/post-model')

// Create
router.post('/', encodedUrlParser, (req, res) => {

})

// List all
router.get('/list', (req, res) => {
  post.find({}, (err, result) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).send(result)
    }
  })
})

// List one
router.get('/:id', (req, res) => {
  post.findById(req.params.id)
})

module.exports = router
