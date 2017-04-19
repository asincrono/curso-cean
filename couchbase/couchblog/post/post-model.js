const db = require('./../db')

const ottoman = require('ottoman')

const PostModel = ottoman.model('Post', {
  text: 'String',
  timestamp: {
    type: 'Date',
    default: Date.now
  }
})

PostModel.createAndSave = function (text, done) {
  this.create({
    text
  }, done)
}

module.exports = PostModel
