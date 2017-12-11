const fs = require('fs')
const path = require('path')

const puppet = require('../../server/routes/puppet')
const { cityArr } = require('../cityList')

testScrape()

function testScrape () {
  fs.readFile(`${__dirname}/picLibrary.json`, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      let pics = JSON.parse(data)
      const randNum = Math.floor(Math.random() * cityArr.length)
      const city = cityArr[randNum]
      console.log('searching wikipedia for ' + city)
      setTimeout(() => console.log('please wait'), 1000)
      puppet.scrapePic(city)
        .then(res => {
          const picExist = pics.find(p => p === res)
          if (!picExist) {
            pics.push(res); console.log('saved ' + city + ' pic to library')
          } else {
            console.log('already got that pokemon')
          }
          fs.writeFile(path.join(__dirname, '/picLibrary.json'), JSON.stringify(pics), (err) => {
            if (err) console.log(err)
          })
        })
    }
  })
}
// i think this is an instance of function-hoisting...Also there is a refactor job here :)
// maybe have a way to ask the user whether the test passed or not - if Y it prints a tick, if N it prints a cross :)
// Moscow seems to break... LOL
