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
    getPic(city, (err, res) => {
      if (err) console.log(err)
      else console.log(res); dispatch(addPic(res.pic)) // need to figure out what res.pic should be
    })
  }
}
