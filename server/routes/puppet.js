const puppeteer = require('puppeteer')

async function scrapePic (city) {
  const searchCity = transform(city)
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://en.wikipedia.org/wiki/${searchCity}`)

  const pic = await page.evaluate(() => {
    return document.querySelector('img').src // find HTML of img
  })

  browser.close()
  return pic
}

function transform (city) {
  const newCity = city.split('/')[1]
  if (newCity === 'New_York') { return 'New_York_City' }
  return newCity
}

module.exports = {scrapePic}
