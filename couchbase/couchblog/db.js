const couchbase = require('couchbase')
const ottoman = require('ottoman')

const cluster = new couchbase.Cluster('couchbase://localhost')
const bucket = cluster.openBucket('couchblog')

ottoman.store = new ottoman.CbStoreAdapter(bucket)

exports.ottoman = ottoman

require('./user/user-model')
require('./post/post-model')

ottoman.ensureIndices((err) => {
  console.error(err)
})
