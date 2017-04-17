const express = require('express')

const app = express()

app.set('views', __dirname)
app.set('view engine', 'pug')

app.use(require('./site/router'))
