console.log('(b.js) doing "b" things.\n')

exports.name = 'this is b.js módule'
exports.finished = false

console.log('(b.js) going to "require" a.js help.\n')
const a = require('./a.js')

console.log('(b.js) ---')
console.log(a)
console.log('(b.js) ---\n')

console.log('(b.js) doing more "b" things.\n')

exports.finished = true
