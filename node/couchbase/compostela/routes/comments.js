const express = require('express')
const router = express.Router()

router.route('/')
.get((req, res) => {
  res.render('comments')
})
.post((req, res) => {
  res.redirect('/')
})

module.exports = router
