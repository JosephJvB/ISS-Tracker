function transform (city) {
  switch (city) {
    case 'New_York': return 'New_York_City'
    case 'Oral': return 'Oral,_Kazakhstan'
    case 'Santa_Isabel': return 'Santa_Isabel_Island'
    case 'Pheonix': return 'Pheonix,_Arizona'
    default:
      return city
  }
}

module.exports = { transform }

// and some city names are ambiguous which i really just need to find by trial and error. I could write a second scraper to do that...
// if the wiki page has the 'need additional citations' then the scraper will return an image of a book lol
// req.params.country could be good for the disambig. ?
