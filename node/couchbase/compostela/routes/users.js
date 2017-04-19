const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const bodyParserURLenconded = bodyParser.urlencoded({ extended: false })

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/', (req, res) => {
  console.log(req.params.id)
})

router.post('/', bodyParserURLenconded, (req, res) => {

})

module.exports = router
