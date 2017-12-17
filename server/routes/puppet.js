const puppeteer = require('puppeteer')

const bookSrc = 'upload.wikimedia.org/wikipedia/en/thumb/9/99/Question_book-new.svg/50px-Question_book-new.svg.png'

async function scrapePic (city) {
  if (city === 'test') return 'great job'
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  await page.goto(`https://en.wikipedia.org/wiki/${city}`)

  const pic = await page.evaluate(() => {
    let sauce = document.body.querySelector('a.image').innerHTML.split('src="//')[1].split('" ')[0]
    // if(sauce === 'bookSrc') return second('a.image')
    return sauce
  })

  browser.close()
  return pic
}

module.exports = {scrapePic}

// stop returning the book pic! started some pseudocode
// Tripoli is a case to test
