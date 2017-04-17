const express = require('express')
const app = express()

// Logger.
const morgan = require('morgan')

const passport = require('passport')
const Strategy = require('passport-local').Stragegy
const db = require('./db')
const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

/*
Configure local strategy.
*/
passport.use(new Strategy(
  (userName, password, cb) => {
    db.users.findByName(userName, (err, user) => {
      if (err) { return cb(err) }
      if (!user) { return cb(null, false) }
      if (user.password !== password) { return cb(null, false) }
      return cb(null, user)
    })
  }
))

passport.serializeUser((user, cb) => {
  cb(null, user.id)
})

passport.deserializeUser((id, cb) => {
  db.users.findById(id, (err, user) => {
    if (err) { return cb(err) }
    cb(null, user)
  })
})

// Setup logger.
app.use(morgan('tiny'))

// To server static dir content.
app.use(express.static('./public'))

app.post('/login', urlEncodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  res.send('All things ok.')
})

app.post('/login', passport.authen)

app.listen(3001)
