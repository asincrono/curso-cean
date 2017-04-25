require('./../db')

const ottoman = require('ottoman')

const User = ottoman.model('User', {
  name: 'string',
  pass: 'string',
  messages: [{
    message: {ref: 'Message'}
  }]
},
  {
    index: {
      findByName: {
        by: 'name'
      }
    }
  })

User.createAndSave = function (name, pass, cb) {
  this.create({ name, pass }, cb)
}

User.prototype.addMessage = function (msg, cb) {
  console.log(msg)
  if (!this.messages) {
    this.messages = []
  }

  this.messages.push(msg)

  console.log(this)

  this.save(cb)
}

module.exports = User
