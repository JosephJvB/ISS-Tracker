import request from 'superagent'

const coordsUrl = 'https://api.wheretheiss.at/v1/satellites/25544.'
const positionUrl = 'https://api.wheretheiss.at/v1/coordinates/'

export function getPosition (lat, lng, callback) {
  request
    .get(`${positionUrl}${lat},${lng}`)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

export function getLatLng (callback) {
  request
    .get(coordsUrl)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

export function getPic (city, callback) {
  request
    .get(`/api/v1/picScrape/${city}`)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        console.log(res)
        callback(null, res.body)
      }
    })
}
