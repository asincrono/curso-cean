const ottoman = require('ottoman')

class User {
  constructor (firstName, lastName) {
    return ottoman.model('User', {
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
  }

  addCommnent (comment) {
    if (!this.comments) {
      this.comments = []
    }

    this.comments.push(comment)
  }
}

module.exports = User
