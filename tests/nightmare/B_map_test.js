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

Scenario('see API key', I => {
  I.seeInSource('https://maps.googleapis.com/maps/api/js?key=AIzaSyD_M55uwmhRPK2bQNz6Q9v5T-O5cQYq1Q8')
})

// see what else could be in source to test!
