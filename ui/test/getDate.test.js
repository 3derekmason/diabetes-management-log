const getDate = require('../src/util/getDate.js')

const dateString = '3/31/2022, Thu 08:49:35 GMT-0600 (Mountain Daylight Time'

test('Separates numeric date from date-time string', () => {
  expect(getDate(dateString)).toBe('3/31/2022')
})
