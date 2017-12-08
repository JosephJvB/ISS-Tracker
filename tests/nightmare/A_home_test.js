Feature('home tests')

Scenario('see app', I => {
  I.amOnPage('/')
  I.seeElement('#app')
})

Scenario('see bulma script', I => {
  I.seeInSource('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.css">')
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

Scenario('see bundle.js', I => {
  I.seeInSource('<script src="bundle.js"></script>')
})
