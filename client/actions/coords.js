import { getLatLng } from '../apiClient'

export const ADD_COORDS = 'ADD_COORDS'
export const GET_COORDS = 'GET_COORDS'

export const addCoords = (lat, lng) => {
  return {
    type: ADD_COORDS,
    coords: { lat, lng }
  }
}

export const getCoords = () => {
  return (dispatch) => {
    getLatLng((err, res) => {
      if (err) console.log(err)
      else dispatch(addCoords(res.latitude, res.longitude))
    })
  }
}
