const APIURL = 'http://maps.googleapis.com/maps/api/geocode/json?address='

const request = require('request')
const axios = require('axios')

function getCoords (address) {
  let url = encodeURI(APIURL + address)
  request(url, (err, response, body) => {
    console.log(response.data)
  })
}

function getCoordsAXIOS (address) {
  axios.get(encodeURI(APIURL + address))
  .then(response => console.log(response.data.results))
  .catch(error => console.error(error))
}

getCoordsAXIOS('pardaces de abaixo 39')


