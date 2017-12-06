import { addCoords, ADD_COORDS } from '../../client/actions/coords'

test('addCoords has correct shape', () => {
  const action = addCoords(1, 2)
  expect(action.type).toBe(ADD_COORDS)
  expect(action.coords).toBe({ lat: 1, lng: 2 })
})
