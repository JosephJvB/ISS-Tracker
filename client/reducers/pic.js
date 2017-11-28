import { ADD_PIC } from '../actions/pic'

export default function pic (state = {}, action) {
  switch (action.type) {
    case ADD_PIC:
      return {url: action.picUrl}
    default:
      return state
  }
}
