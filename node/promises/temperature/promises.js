function add (x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x === 'number' && typeof y === 'number') {
      resolve(x + y)
    } else {
      reject(new Error('Invalid arguments'))
    }
  })
}

add(1, 2)
.then(result => add(result, 10))
.then(result => console.log(result))
.catch(error => console.error(error))
