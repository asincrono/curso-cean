module.exports = (bucket) => {
  let ottoman = require('ottoman')

  ottoman.store = new ottoman.CbStoreAdapter(bucket)

  require('./user/user-model')
  require('./post/post-model')

  ottoman.ensureIndices((err) => {
    console.error(err)
  })
}

ottoman = require('ottoman')
module.exports.EsteModel = ottoman.model(...)