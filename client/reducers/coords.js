import { ADD_COORDS } from '../actions/coords'

export default function coords (state = [], action) {
  switch (action.type) {
    case ADD_COORDS:
      return [...state, action.coords]
    default:
      return state
  }
}
