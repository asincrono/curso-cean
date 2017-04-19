const config = module.exports
const PRODUCTION = process.env.NODE_ENV === 'production'

config.express = {
  port: process.env.EXPRESS_PORT || 3001,
  ip: '127.0.0.1'
}

config.couchbase = {
  port: process.env.COUCHBASE_PORT || 8091,
  ip: process.env.COUCHBASE_HOST || '127.0.0.1'
}

config.db = {
  bucket: 'users'
}

if (PRODUCTION) {
  config.express.ip = '0.0.0.0'
}
