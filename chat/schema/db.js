const couchbase = require('couchbase')
const cluster = new couchbase.Cluster('couchbase://127.0.0.1')

const bucket = cluster.openBucket('chat', (err) => {
  if (err) console.error(err)
})

const ottoman = require('ottoman')

ottoman.store = new ottoman.CbStoreAdapter(bucket, couchbase)

require('./model/user')
require('./model/message')

ottoman.ensureIndices((err) => {
  if (err) console.error(err)
})
