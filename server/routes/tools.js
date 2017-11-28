function transform (city) {
  const newCity = city.split('/')[1]
  if (newCity === 'New_York') { return 'New_York_City' }
  return newCity
}

module.exports = { transform }
