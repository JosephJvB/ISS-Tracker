import request from 'superagent'

const issUrl = "https://api.wheretheiss.at/v1/satellites/25544."
const positionUrl =" https://api.wheretheiss.at/v1/coordinates/"

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
    .get(issUrl)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}