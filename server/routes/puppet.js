const puppeteer = require('puppeteer')

async function scrapePic (city) {
  if (city === 'test') return 'great job'
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://en.wikipedia.org/wiki/${city}`)

  const pic = await page.evaluate(() => {
    let sauce = document.body.querySelector('a.image').innerHTML.split('src="//')[1].split('" ')[0]
    // if(sauce === 'book pic url') return second('a.image')
    return sauce
  })

  browser.close()
  // console.log('pic: ', pic)
  return pic
}

module.exports = {scrapePic}

// stop returning the book pic! started some pseudocode
