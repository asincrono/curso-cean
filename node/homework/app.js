const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

/* To server static dir content. */
app.use(express.static('./public'))

app.post('/login', urlEncodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body)
  res.send('All things ok.')
})

app.listen(3001)
