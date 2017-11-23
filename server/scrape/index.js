const request = require('superagent')
const fs = require('fs')
const path = require('path')

const issCoords = 'https://api.wheretheiss.at/v1/satellites/25544.'

start()

function start () {
  getCoords()
}

function getCoords () {
  request
    .get(issCoords)
    .end((err, res) => {
      if (err) { console.log(err) }
      const coords = {
        lat: res.body.latitude,
        lng: res.body.longitude
      }
      console.log('im coords', coords)
      fs.writeFile(`${__dirname}/coords.txt`, coords, (err) => {
        if (err) console.log(err)
        else console.log('wrote em')
      })
      setTimeout(getCoords(), 3000)
    })
}
