function transform (city) {
  if (city === 'New_York') return 'New_York_City'
  if (city === 'Oral') return 'Oral,_Kazakhstan'
  return city
}

module.exports = { transform }

// and some city names are ambiguous which i really just need to find by trial and error. I could write a second scraper to do that...
// if the wiki page has the 'need additional citations' then the scraper will return an image of a book lol
// req.params.country could be good for the disambig.
