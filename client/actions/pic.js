import { getPic } from '../apiClient'

export const ADD_PIC = 'ADD_PIC'

export const addPic = (src) => {
  return {
    type: ADD_PIC,
    src
  }
}

export const gimmePic = (city) => {
  return (dispatch) => {
    getPic(city, (err, pic) => {
      if (err) console.log(err)
      else dispatch(addPic(pic))
    })
  }
}
