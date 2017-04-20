const couchbase = require('couchbase')
const cluster = new couchbase.Cluster('couchbase://127.0.0.1')
const bucket = cluster.openBucket('couchblog')

const ottoman = require('ottoman')
ottoman.store = new ottoman.CbStoreAdapter(bucket, couchbase)

const UserModel = require('./models/user')


const express = require('express')
const path = require('path')
// const favicon = require('serve-favicon')
const logger = require('morgan')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))

const index = require('./routes/index')
const userRouter = require('./user/user-router')

app.use('/', index)
app.use('/user', userRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
