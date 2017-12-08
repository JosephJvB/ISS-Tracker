Feature('pic click tests')

Scenario('see fish at sea', function * (I) {
  let src = yield I.grabAttributeFrom('.pic', 'src')
  let loc = yield I.grabTextFrom('#loc')
  let country = loc.split('/')[0]
  let city = loc.split('/')[1]
  src.includes('dopefish') ? I.see('Location not specified') : I.see(country + '/' + city)
})

Scenario('see wikipedia on land', function * (I) {
  let src = yield I.grabAttributeFrom('.pic', 'src')
  I.click('.pic')
  !src.includes('dopefish') ? I.seeInCurrentUrl('wikipedia') : I.see('Location not specified')
})

// top test is pretty verbose...but cant think of better solution atm
