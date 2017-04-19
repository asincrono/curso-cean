const ottoman = require('ottoman')

class Comment {
  constructor (message) {
    return ottoman.model('Comment', {
      message: 'string',
      timestamp: {
        type: 'Date',
        datefault: () => new Date()
      }
    })
  }

  createAndSave (message, done) {
    this.create({ message }, done)
  }

}

module.exports = Comment
