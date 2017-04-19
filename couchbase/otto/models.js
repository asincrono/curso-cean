const ottoman = require('ottoman')
const couchbase = require('couchbase')
const bucket = require('./index').bucket

ottoman.store = new ottoman.CbStoreAdapter(bucket, couchbase)

exports.PersonModel = ottoman.model('Person', {
  name: {
    first: 'string',
    last: 'string'
  },
  email: 'string',
  comments: [
    {
      ref: 'Comment'
    }
  ],
  timestamp: {
    type: 'Date',
    datefault: () => new Date()
  }
})

exports.CommentModel = ottoman.model('Comment', {
  message: 'string',
  timestamp: {
    type: 'Date',
    datefault: () => new Date()
  }
})
