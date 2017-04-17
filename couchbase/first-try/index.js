const morgan = require('morgan')
const

const express = require('express')
const app = express()

app.set('view engine', 'pug')


// Serve static content.
app.use(express.static('./public'))
