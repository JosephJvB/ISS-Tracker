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
  I.wait(6)
  let tz = yield I.grabTextFrom('#loc')
  let err = yield I.grabTextFrom('#err')
  I.see(tz || err)
})

Scenario('see pic', I => {
  I.seeElement('.pic')
})

Scenario('pic is fish or wiki', function * (I) {
  let pic = yield I.grabAttributeFrom('.pic', 'src')
  I.seeInSource(pic)
})

// Scenario('sauce test', I => {
//   I.seeInSource('idklol')
// })

// test that if msg is a timezone then img src has wikipedia & test that imgClick takes you to wikipedia :)
// then if msg is err that img src is dopefish
// test that transform works with all sorts of diff inputs
