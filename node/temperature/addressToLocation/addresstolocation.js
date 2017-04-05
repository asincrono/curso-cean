const APIURL = 'http://maps.googleapis.com/maps/api/geocode/json?address='

const axios = require('axios')

function getCoords (address, callback) {
  axios.get(encodeURI(APIURL + address))
  .then(response => callback(null, response.data.results[0].geometry.location))
  .catch(error => callback(error))
}

module.exports = {
  getCoords
}
