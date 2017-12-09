Feature('info click tests')

Scenario('see lat value', function * (I) {
  I.click('MORE INFO')
  I.wait(0.3)
  I.waitForVisible('.pic')
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
  let err = yield I.grabTextFrom('#err')
  I.see(tz || err)
})

Scenario('see a pic', I => {
  I.seeElement('.pic')
})

// Scenario('sauce test', I => {
//   I.seeInSource('idklol')
// })
