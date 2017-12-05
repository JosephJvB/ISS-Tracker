Feature('title tests')

Scenario('see title', I => {
  I.amOnPage('/')
  I.seeInTitle('I.S.S')
})

Scenario('see heading', I => {
  I.see('ISS Tracker')
})
