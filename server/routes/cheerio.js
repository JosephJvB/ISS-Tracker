const request = require('superagent')
const cheerio = require('cheerio')
// const fs = require('fs')
// const path = require('path')

export function cheeriScrape (city) {
  if (city === 'New_York') city = 'New_York_City'
  request
    .get(`https://en.wikipedia.org/wiki/${city}`)
    .end((err, res) => {
      if (err) console.log(err)
      const $ = cheerio.load(res.text)
      let picSrc = $('a.image img')
    })
  // ('a.image img').attr('src')
}
