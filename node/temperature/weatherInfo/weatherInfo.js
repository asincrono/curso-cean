const axios = require('axios')
const {FORECAST_API_KEY} = require('../api_keys')
const FORECAST_URL = 'https://api.darksky.net/forecast'


function buildURL (location, apiKey) {
  return `${FORECAST_URL}/${apiKey}/${location.lat},${location.lng}?units=auto`
}
function getTemp (location, callback) {
  let url = buildURL(location, FORECAST_API_KEY)
  console.log(url)
  axios.get(url)
  .then(response => {
    let temp = response.data.currently.temperature
    callback(null, temp)
  })
  .catch(error => callback(error))
}

module.exports = {
  getTemp
}
