const puppeteer = require('puppeteer')

async function scrapePic (city) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://en.wikipedia.org/wiki/${city}`)

  const pic = await page.evaluate(() => {
    const sauce = document.body.querySelector('a.image').innerHTML.split('src="//')[1].split('" ')[0]
    return sauce
  })

  browser.close()
  console.log('pic: ', pic)
  return pic
}

module.exports = {scrapePic}

// 'this article has multiple issues' will return a ? book rather than the image. Need to figure a solution for that
