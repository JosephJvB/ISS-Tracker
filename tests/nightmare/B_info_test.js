Feature('info click tests')

Scenario('see lat value', function * (I) {
  I.click('MORE INFO')
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
  I.waitForVisible('#pic')
  let tz = yield I.grabTextFrom('#loc')
  I.see(tz || 'Location not specified. (only coordinates on land are supported)')
})

Scenario('see pic', I => {
  I.seeElement('#pic')
})

// Scenario('sauce test', I => {
//   I.seeInSource('idklol')
// })

// test that if msg is a timezone then img src has wikipedia & test that imgClick takes you to wikipedia :)
// then if msg is err that img src is dopefish
