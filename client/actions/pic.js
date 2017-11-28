import { getPic } from '../apiClient'

export const ADD_PIC = 'ADD_PIC'

const addPic = (picUrl) => {
  return {
    type: ADD_PIC,
    picUrl
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
