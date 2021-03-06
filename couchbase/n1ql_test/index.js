const express = require('express')
const app = express()

const logger = require('morgan')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const couchbase = require('couchbase')
const cluster = new couchbase.Cluster('couchbase://127.0.0.1')
const bucket = cluster.openBucket('beer-sample', '1234', (err) => {
  if (err) {
    console.error(err)
  } else {
    bucket.get('21st_amendment_brewery_cafe', (err, result) => {
      if (err) {
        console.error(err)
      } else {
        console.log(result)
      }
    })
  }
  bucket.disconnect()
})

function get (id, cb) {
  console.log(id)
  cluster.openBucket('beer-sample', '1234', function (err) {
    if (err) {
      console.error(err)
    } else {
      this.get(id, (err, result) => {
        cb(err, result.value)
      })
    }
    this.disconnect()
  })
}

function insert (id, doc, cb) {
  cluster.openBucket('beer-sample', '1234', function (err) {
    if (err) {
      console.error(err)
    } else {
      console.log(doc)
      this.insert(id, doc, function (err, result) {
        cb(err, result)
        this.disconnect()
      })
    }
  })
}

const N1qlQuery = require('couchbase').N1qlQuery

function getBucket (bName, bPass, cb) {
  return openBucket
}

function n1qlInsert (statement, values, cb) {
  cluster.openBucket('beer-sample', '1234', function (err) {
    if (err) {
      console.error(err)
    } else {
      let query = N1qlQuery.fromString(statement)
      let self = this
      this.query(query, values, function (err, result) {
        cb(err, result)
        self.disconnect()
      })
    }
  })
}

function n1qlRun (statement, values, cb) {
  cluster.openBucket('beer-sample', '1234', function (err) {
    if (err) {
      cb(err)
    } else {
      let query = N1qlQuery.fromString(statement)
      let self = this
      this.query(query, values, (err, result)  => {
        cb(err, result)
        self.disconnect()
      })
    }
  })
}

function n1qlDel (values, cb) {
  cluster.openBucket('beer-sampe', '1234', function (err) {
    if (err) {
      cb(err)
    } else {
      let statement = 'DELETE FROM $1 WHERE KEY = $2'
      let query = N1qlQuery.fromString(statement, values)
      let self = this
      this.query(query, values, (err, result) => {
        cb(err, result)
        self.disconnect()
      })
    }
  })
}

function n1qlUpdate () {
  cluster.openBucket
  let sentence = 'UPDATE `beer-sample` USE KEYS($1) SET iata = $2, name = $3'
  let query = N1qlQuery.fromString(sentence)
  bucket.query(query, values)
}

app.use(logger('dev'))

app.get('/beer/:id', (req, res) => {
  get(req.params.id, (err, value) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).send(value)
    }
  })
})

app.post('/beer/:id', jsonParser, (req, res) => {
  insert(req.params.id, req.body, (err) => {
    console.log('Ejecutando el callback')
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).send('All ok')
    }
  })
})

app.post('/beer/n1ql/:id', jsonParser, (req, res) => {
  n1qlInsert('INSERT INTO `travel-sample` (KEY, VALUE) VALUES ($1, $2)', [req.params.id, req.body], (err, result) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).send(result)
    }
  })
})

app.delete('/beer/n1ql/:id', jsonParser, (req, res) => {

})

app.listen('3001', (err) => {
  if (err) console.error(err)
})
