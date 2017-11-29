const puppeteer = require('puppeteer')

const tools = require('./tools')

scrapePic('New_York')

async function scrapePic (city) {
  console.log('city: ', city)
  const searchCity = tools.transform(city)
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://en.wikipedia.org/wiki/${searchCity}`)

  const pic = await page.evaluate(() => { // PROBLEM AT PIC - err msg down below
    const sauce = document.body.querySelector('h1.firstHeading').innerHTML
    console.log('sauce: ', sauce)
    return sauce
  })

  browser.close()
  console.log('pic: ', pic)
  return pic
}

module.exports = {scrapePic}

// ERROR MESSAGE some sort of unresolved promise??
// pic:  Promise { <pending> }
// (node: 66345) UnhandledPromiseRejectionWarning: Unhandled promise rejection(rejection id: 1): Error: Protocol error(Runtime.callFunctionOn): Target closed.
// (node: 66345)[DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated.In the future, promise rejections that are not handled will terminate the Node.js process with a non - zero exit code.
