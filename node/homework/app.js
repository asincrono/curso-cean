const session = require('express-session')
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
passport.use(new Strategy((userName, userPass, done) => {
  if (userPass === '1234') {
    return done(null, false)
  }
  return done(null, { userName })
}))

passport.serializeUser((user, cb) => {
  cb(null, user.id)
})

passport.deserializeUser((id, cb) => {
  db.users.findById(id, (err, user) => {
    if (err) { return cb(err) }
    cb(null, user)
  })
})

app.set('view engine', 'pug')
app.set('views', './views')

// Setup logger.
app.use(morgan('tiny'))

app.use(session({
  secret: 'Hola mundo',
  resave: false,
  saveUninitialized: true
}))

app.post('/login', urlEncodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  res.send('All things ok.')
})

app.post('/login', passport.authen)

app.get('/index', (req, res) => {
  res.render('index', {
    links: ['login', 'profile', 'about'],
    title: 'Index'
  })
})

app.get('/login', (req, res) => {
  res.render('login', {
    links: ['index', 'profile', 'about']
  })
})

app.post('/login', urlEncodedParser,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))

app.get('/profile', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err)
    if (!user) return res.redirect('/login')
    // then we are authenticated
    res.render('profile', { user })
  })(req, res, next)
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    links: ['index', 'login', 'profile'],
    require
  })
})

/* To server static dir content. */
app.use(express.static('./public'))

app.listen(3001)
