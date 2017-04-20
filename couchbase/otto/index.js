const ottoman = require('ottoman')
const couchbase = require('couchbase')
const cluster = new couchbase.Cluster('couchbase://127.0.0.1')
const bucket = cluster.openBucket('compostela')

ottoman.store = new ottoman.CbStoreAdapter(bucket, couchbase)

const express = require('express')
const app = express()

app.use('/user', require('./routes/user'))

app.listen(3001)
