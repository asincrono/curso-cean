const express = require('express')
const router = express.Router()

const bodyParserJSON = require('body-parser').json()
const bodyParserURLencoded = require('body-parser').urlencoded({ extended: false })

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
