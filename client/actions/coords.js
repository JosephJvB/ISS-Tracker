export const ADD_COORDS = 'ADD_COORDS'

export const addCoords = (lat, lng) => {
  return {
    type: ADD_COORDS,
    coords: { lat, lng }
  }
}
