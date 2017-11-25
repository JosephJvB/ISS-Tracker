import { getLatLng } from '../apiClient'

export const ADD_COORDS = 'ADD_COORDS'
export const TICK_COORDS = 'TICK_COORDS'

export const addCoords = (lat, lng) => {
  return {
    type: ADD_COORDS,
    coords: { lat, lng }
  }
}

export const tickCoords = (count) => {
  return (dispatch) => {
    getLatLng((err, res) => {
      if (err) console.log(err)
      else dispatch(addCoords(res.latitude, res.longitude))
    })
  }
}
