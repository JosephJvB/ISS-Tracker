Feature('info click test')

Scenario('see lat value', function * (I) {
  I.click('MORE INFO')
  I.wait(1)
  let lat = yield I.grabTextFrom('#lat')
  let latNo = lat.split(' ')[1]
  I.see('Lat: ' + latNo)
})

Scenario('see lng value', function * (I) {
  let lng = yield I.grabTextFrom('#lng')
  let lngNo = lng.split(' ')[1]
  I.see('Lng: ' + lngNo)
})

Scenario('see err|timezone', function * (I) {
  let tz = yield I.grabTextFrom('#loc')
  I.see(tz || 'Location not specified. (only coordinates on land are supported)')
})

Scenario('see pic', I => {
  I.seeElement('#pic')
})

// i have some serious issue with seeElement huh
