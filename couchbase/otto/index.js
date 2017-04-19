const bodyParser = require('body-parser')
const logger = require('morgan')('tiny')

const ottoman = require('ottoman')
const couchbase = require('couchbase')
const cluster = new couchbase.Cluster('couchbase://127.0.0.1')
const bucket = cluster.openBucket('compostela')
exports.bucket = bucket

ottoman.store = new ottoman.CbStoreAdapter(bucket, couchbase)

const express = require('express')

const app = express()

const PersonModel = require('./models').PersonModel
const CommentModel = require('./models').CommentModel

const model = require('./models')

app.set('view engine', 'pug')

app.use(logger)

app.get('/persons', (req, res) => {
  PersonModel.find({}, (err, result) => {
    console.log(err)
    console.log(result)
    if (err) {
      return res.status(400).send(err)
    }
    res.send(result)
  })
})

app.post('/person', bodyParser.urlencoded({ extended: false }), bodyParser.json(), (req, res) => {
  let person = new PersonModel({
    name: {
      first: req.body.name.first,
      last: req.body.name.last
    },
    email: req.body.email
  })

  person.save((err, result) => {
    if (err) res.status(400).send(err)
    else res.send(person)
  })
})

app.listen(3001)
