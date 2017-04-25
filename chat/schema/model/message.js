require('./../db')

const ottoman = require('ottoman')

const Message = ottoman.model('Message', {
  text: 'string',
  chat: 'string',
  timestamp: {
    type: 'Date',
    default: function () { return new Date() }
  }},
  {
    index: {
      findByChat: {
        by: 'chat'
      }
    }
  })

module.exports = Message
