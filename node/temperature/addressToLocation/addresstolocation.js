const APIURL = 'http://maps.googleapis.com/maps/api/geocode/json?address='

const axios = require('axios')

function getCoords (address) {
  return new Promise((resolve, reject) => {
    axios.get(encodeURI(APIURL + address))
    .then(response => {
      console.log(response.data)
      if (response.status !== 'OK') {
        reject(new Error(`No results for addres: ${address}`))
      } else {
        resolve(response.data.results[0].geometry.location)
      }
    })
    .catch(error => reject(error))
  })
}

module.exports = {
  getCoords
}
