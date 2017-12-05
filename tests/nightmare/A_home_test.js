Feature('home tests')

Scenario('see app', I => {
  I.amOnPage('/')
  I.seeElement('#app')
})

Scenario('see title', I => {
  I.seeInTitle('I.S.S')
})

Scenario('see heading', I => {
  I.see('ISS Tracker')
})

Scenario('see hr', I => {
  I.seeElement('hr')
})
