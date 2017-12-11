const config = require(`${__dirname}/../../knexfile`).development
const knex = require('knex')(config)
const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())

router.post('/', (req, res) => {
  return knex('paths')
    .insert({
      coords: req.body.coords,
      places: req.body.places
    })
})

module.exports = router

// I just need to think about how I'm going to send places. Coords can come from this.props.coords.
// places is going to something else I have to store in redux...

/* places action: addPlacereturn (city, pic) { type: ADD_PLACE, place: {city, pic}}

places reducer: places (state = [], action) {
  switch(action.type)
  case ADD_PLACE:
  return [...state, action.place]
  default:
  return state
}

ok so that's simple but maybe there has to be a conditional check on the component.
 if (!this.props.places.find(p => p.city === city)) dispatch(addPlace(city, pic))
*/
