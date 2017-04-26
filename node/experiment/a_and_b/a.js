console.log('(a.js) doning "a" things.\n')

exports.name = 'this is a.js module'
exports.finished = false

console.log('(a.js) going to "require" b.js help.\n')
const b = require('./b.js')

console.log('(a.js) ---')
console.log(b)
console.log('(a.js) ---\n')

console.log('(a.js) doing more "a" things.\n')
exports.finished = true
