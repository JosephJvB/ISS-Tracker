const request = require('superagent')
const fs = require('fs')
const path = require('path')

const issCoords = 'https://api.wheretheiss.at/v1/satellites/25544.'

const allCoords = []
const counter = 1

getCoords(counter)

function getCoords (count) {
  request
    .get(issCoords)
    .end((err, res) => {
      if (err) console.log(err)
      else {
        const coords = { lat: res.body.latitude, lng: res.body.longitude }
        console.log('coords no', count, coords)
        allCoords.push(coords)
        // console.log('im allCoords', allCoords)
        if (allCoords.length === 6) {
          fs.writeFile(`${__dirname}/coords.txt`, JSON.stringify(allCoords), (err) => {
            if (err) console.log(err)
            else console.log('all done my G')
          })
        } else { setTimeout(() => getCoords(count + 1), 1000) }
      }
    })
}
