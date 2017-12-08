Feature('pic click tests')

Scenario('fish or wiki', function * (I) {
  let src = yield I.grabAttributeFrom('.pic', 'src')
  if (src.includes('dopefish')) {
    I.seeElement('#fish')
    I.see('Location not specified')
  } else {
    I.click('#wiki')
    I.seeInCurrentUrl('wikipedia')
  }
})

Scenario('bigtest', function * (I) {
  let err = yield I.grabTextFrom('#err')
  let loc = yield I.grabTextFrom('#loc')
  if (loc) I.seeElement('#wiki')
  if (err) I.seeElement('#fish')
})

// these tests are pretty goofy sure they overlap
