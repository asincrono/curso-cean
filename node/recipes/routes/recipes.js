const express = require('express')
const router = new express.Router()

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const recipes = [
  {
    name: 'Primera',
    ingredients: [],
    steps: []
  },
  {
    name: 'Segunda',
    ingredients: [],
    steps: []
  }
]

router.get('/', (req, res) => {
  console.log(recipes)

  res.set('Access-Control-Allow-Origin', '*').status(200).send(recipes)
})

router.post('/', jsonParser, (req, res) => {
  res.status(200).sendFile(recipes)
})

module.exports = router
