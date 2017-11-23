const request = require('superagent')
const fs = require('fs')
const path = require('path')

const issCoords = 'https://api.wheretheiss.at/v1/satellites/25544.'

start()

function start () {
  getCoords()
}

const allcoords = []

function getCoords () {
  request
    .get(issCoords)
    .end((err, res) => {
      if (err) console.log(err)
      else {
        const coords = {lat: res.body.latitude, lng: res.body.longitude}
        // console.log('im coords', coords)
        allcoords.push(coords)
        console.log('im allcoords', allcoords)
        if (allcoords.length === 20) {
          fs.writeFile(`${__dirname}/coords.txt`, JSON.stringify(allcoords), (err) => {
            if (err) console.log(err)
            else console.log('all done my G')
          })
        } else { setTimeout(getCoords, 10000) }
      }
    })
}
