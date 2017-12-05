Feature('map tests')

Scenario('see mapScript', I => {
  I.seeInSource('https://maps.googleapis.com/maps-api-v3/api/js/31/1/intl/en_gb/map.js')
})

Scenario('see markerScript', I => {
  I.seeInSource('https://maps.googleapis.com/maps-api-v3/api/js/31/1/intl/en_gb/marker.js')
})

Scenario('see polylineScript', I => {
  I.seeInSource('https://maps.googleapis.com/maps-api-v3/api/js/31/1/intl/en_gb/poly.js')
})
