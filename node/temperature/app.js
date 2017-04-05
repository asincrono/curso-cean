const argv = require('yargs').argv
const {getCoords} = require('./addressToLocation/addresstolocation')
const {getTemp} = require('./weatherInfo/weatherInfo')

getCoords(argv.add)
.then(location => {
  console.log(location)
  return getTemp(location)
})
.then(temp => console.log(`tempertura: ${temp}`))
.catch(err => console.error(err))
