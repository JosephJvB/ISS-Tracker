import coordsReducer from '../../client/reducers/coords'
import picReducer from '../../client/reducers/pic'

test('coords reducer stores coords in array', () => {
  const initialState = [1, 2, 3]
  const action = { type: 'ADD_COORDS', coords: {} }
  const newState = coordsReducer(initialState, action)
  expect(newState.length).toBe(4)
})

test('pic reducer holds one pic', () => {
  const initialState = 'niceDoggy'
  const action = { type: 'ADD_PIC', src: 'prettyKitty' }
  const newState = picReducer(initialState, action)
  expect(newState).toBe('prettyKitty')
})
