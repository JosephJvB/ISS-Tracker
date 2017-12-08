Feature('pic click tests')

Scenario('see wikipedia or fish info', function * (I) {
  let src = yield I.grabAttributeFrom('.pic', 'src')
  I.click('.pic')
  if (src.includes('dopefish')) {
    I.seeElement('#fish')
    I.see('Location not specified')
  } else {
    I.seeInCurrentUrl('wikipedia')
  }
})
