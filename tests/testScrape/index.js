const fs = require('fs')
const path = require('path')

const puppet = require('../../server/routes/puppet')

const cityArr = ['Dakar', 'New_York_City', 'Oral,_Kazakhstan', 'Santa_Isabel_Island', 'Pheonix,_Arizona', 'Santarém,_Pará', 'Jujuy_Province', 'Córdoba,_Argentina', 'Auckland', 'Tripoli', 'Wellington', 'Ürümqi', 'Shanghai', 'Taipei', 'Paris', 'London', 'Madrid', 'Manchester', 'Moscow', 'Brisbane', 'Los_Angeles', 'San_Fransisco', 'Seattle', 'Melbourne', 'Ho_Chi_Minh_City', 'Tokyo', 'Sapporo', 'Brussels', 'Berlin', 'Oslo', 'Reykjavík', 'The_Hague', 'Amsterdam', 'Rotterdam', 'Malmo', 'Durban', 'Dubai', 'Turkmenistan', 'Tehran', 'Hong_Kong', 'Brasília', 'São_Paulo', 'Seoul']

testScrape(cityArr)

function testScrape (citys) {
  fs.readFile(`${__dirname}/../../tests/testScrape/picLibrary.json`, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      let pics = JSON.parse(data)
      const randNum = Math.floor(Math.random() * citys.length)
      const city = citys[randNum]
      console.log('searching wikipedia for ' + city)
      setTimeout(() => console.log('please wait'), 1000)
      puppet.scrapePic(city)
        .then(res => {
          const picExist = pics.find(p => p === res)
          if (!picExist) pics.push(res)
          fs.writeFile(path.join(__dirname, '../../tests/testScrape/picLibrary.json'), JSON.stringify(pics), (err) => {
            if (err) console.log(err)
            else console.log('pic: ', res)
          })
        })
    }
  })
}

// maybe have a way to ask the user whether the test passed or not - if Y it prints a tick, if N it prints a cross :)
// Moscow seems to break... LOL
