function transform (location) {
  const cityArr = location.split('/')
  const city = cityArr.length === 3 ? cityArr[2] : cityArr[1]
  switch (city) {
    case 'New_York': return 'New_York_City'
    case 'Oral': return 'Oral,_Kazakhstan'
    case 'Santa_Isabel': return 'Santa_Isabel_Island'
    case 'Pheonix': return 'Pheonix,_Arizona'
    case 'Santarem': return 'Santarém,_Pará'
    case 'Jujuy': return 'Jujuy_Province'
    case 'Cordoba': return 'Córdoba,_Argentina'
    default:
      return city
  }
}

module.exports = { transform }

// and some city names are ambiguous which i really just need to find by trial and error. I could write a second scraper to do that...
// if the wiki page has the 'need additional citations' then the scraper will return an image of a book lol
// req.params.country could be good for the disambig. ?
