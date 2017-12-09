const puppet = require('../server/routes/puppet')
const cityArr = ['Dakar', 'New_York_City', 'Oral,_Kazakhstan', 'Santa_Isabel_Island', 'Pheonix,_Arizona', 'Santarém,_Pará', 'Jujuy_Province', 'Córdoba,_Argentina', 'Auckland', 'Tripoli', 'Wellington', 'Ürümqi', 'Shanghai', 'Taipei', 'Paris', 'London', 'Madrid', 'Moscow']

testScrape(cityArr)

function testScrape (cityArr) {
  const randNum = Math.floor(Math.random() * cityArr.length)
  const city = cityArr[randNum]
  console.log('searching wikipedia for ' + city)
  setTimeout(() => console.log('please wait'), 1000)
  puppet.scrapePic(city, 'test')
}

// maybe have a way to ask the user whether the test passed or not - if Y it prints a tick, if N it prints a cross :)
