function capitalize (string) {
  let first = string.splice(0, 1)
  return first.toUpperCase() + string
}

module.exports = capitalize
