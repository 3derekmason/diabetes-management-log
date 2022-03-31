const getTime = require('../src/util/getTime.js')

const dateString = '3/31/2022, 08:49:35 AM GMT-0600 (Mountain Daylight Time)'

test('Separates time from date-time string', () => {
  expect(getTime(dateString)).toBe('08:49 AM')
})

test('Returns empty string if invalid input', () => {
  expect(getTime(undefined)).toBe('')
})
