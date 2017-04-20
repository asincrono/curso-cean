const ottoman = require('ottoman')

const User = ottoman.model('User', {
  name: {
    first: 'string',
    last: 'string'
  },
  email: 'string',
  timestamp: {
    type: 'Date',
    default: () => new Date()
  }
})

module.exports = User
