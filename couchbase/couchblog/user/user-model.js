const db = require('./../db')

const ottoman = require('ottoman')

const UserModel = ottoman.model('User', {
  name: {
    first: 'string',
    last: 'string'
  },
  timestamp: {
    type: 'Date',
    default: Date.now
  },
  posts: [{
    ref: 'Post'
  }],
  index: {
    findByFirstName: {
      by: 'name.first',
      type: 'view'
    },
    findByLastName: {
      by: 'name.last',
      type: 'view'
    }
  }
})

UserModel.createAndSave = function (firstName, lastName, done) {
  this.create({
    name: {
      first: firstName,
      last: lastName
    }
  }, done)
}

UserModel.prototype.addPost = function (text) {
  if (!this.posts) this.posts = []
  this.posts.push({
    text
  })
}

module.exports = UserModel
