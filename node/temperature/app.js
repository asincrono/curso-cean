const argv = require('yargs').argv
const {getCoords} = require('./addressToLocation/addresstolocation')
const {getTemp} = require('./weatherInfo/weatherInfo')

getCoords(argv.add, (err, location) => {
  if (err) {
    console.error(err)
  } else {
    console.log(location)
    getTemp(location, (err, temp) => {
      if (err) {
        console.error(err)
      } else {
        console.log(`tempertura: ${temp}`)
      }
    })
  }
})
