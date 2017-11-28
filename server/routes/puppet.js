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
  if (city === 'New_York') { return 'New_York_City' }
  return city.split('/')[1]
}

module.exports = {scrapePic}
