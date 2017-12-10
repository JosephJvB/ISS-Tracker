import puppet from '../../server/routes/puppet'
import { cityArr } from '../cityList'

test('scraper returns wikipedia img src', async () => {
  const randNum = Math.floor(Math.random() * cityArr.length)
  const city = cityArr[randNum]
  const scraped = await puppet.scrapePic(city)
  expect(scraped.includes('upload.wikimedia.org/wikipedia/commons/thumb'))
})

// write a test to check that scraper will not return book picture
