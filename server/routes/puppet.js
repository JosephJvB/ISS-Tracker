const puppeteer = require('puppeteer')

const tools = require('./tools')

async function scrapePic (city) {
  const searchCity = tools.transform(city)
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://en.wikipedia.org/wiki/${searchCity}`)

  const pic = await page.evaluate(() => {
    const sauce = document.body.querySelector('a.image').innerHTML.split('src="//')[1].split('" ')[0]
    return sauce
  })

  browser.close()
  console.log('pic: ', pic)
  return pic
}

module.exports = {scrapePic}

// 'this article has multiple issues' will return a ? book rather than the image.
