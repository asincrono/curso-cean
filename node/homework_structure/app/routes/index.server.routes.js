const express = require('express')
const join = require('path').join

const router = new express.Router()

function home (req, res) {
  res.render('views/home')
}

router.use(express.static(join(__dirname), '../../public'))
router.get('/', home)

module.exports = router
