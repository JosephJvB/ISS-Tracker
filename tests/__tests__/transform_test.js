const { transform } = require('../../client/utils')

test('handles standard input', () => {
  const inputVal = 'great/success'
  const outputVal = transform(inputVal)
  expect(outputVal).toBe('success')
})

test('handle edge case', () => {
  const inputVal = 'orderOfThe/Pheonix'
  const outputVal = transform(inputVal)
  expect(outputVal).toBe('Pheonix,_Arizona')
})

test('handle triple-barrel input', () => {
  const inputVal = 'uno!/dos!/tres!'
  const outputVal = transform(inputVal)
  expect(outputVal).toBe('tres!')
})
