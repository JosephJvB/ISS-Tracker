import { addCoords, ADD_COORDS } from '../../client/actions/coords'
import { addPic, ADD_PIC } from '../../client/actions/pic'

test('addCoords has correct shape', () => {
  const action = addCoords(1, 2)
  expect(action.type).toBe(ADD_COORDS)
  expect(action.coords).toEqual({lat: 1, lng: 2})
})

test('addPic has correct shape', () => {
  const action = addPic('Richard\'s selfie')
  expect(action.type).toBe(ADD_PIC)
  expect(action.src).toBe('Richard\'s selfie')
})
