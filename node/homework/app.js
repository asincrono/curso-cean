const session = require('express-session')
const express = require('express')
const app = express()

const passport = require('passport')
const LocalStrategey = require('passport-local').Strategy
passport.use(new LocalStrategey((userName, userPass, done) => {
  if (userPass === '1234') {
    return done(null, false)
  }
  return done(null, { userName })
}))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'pug')
app.set('views', './views')

app.use(session({
  secret: 'Hola mundo',
  resave: false,
  saveUninitialized: true
}))

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
