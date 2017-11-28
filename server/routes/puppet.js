const puppeteer = require('puppeteer')

const tools = require('./tools')

async function scrapePic (city) {
  const searchCity = tools.transform(city)
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://en.wikipedia.org/wiki/${searchCity}`)

  const pic = await page.evaluate(() => {
    const sauce = document.body.querySelector('a.image img').attributes.src
    console.log(sauce)
    return sauce
  })

  browser.close()
  return pic
}

module.exports = {scrapePic}
