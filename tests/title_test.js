
Feature('title')

Scenario('see title', (I) => {
  I.amOnPage('/')
  I.see('ISS Tracker')
})
