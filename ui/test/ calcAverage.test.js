const calcAverage = require('../src/util/calcAverage.js')

const inputArray = [{ value: 1 }, { value: 2 }, { value: 3 }]

test('Returns correct average from value property within an array of objects', () => {
  expect(calcAverage(inputArray)).toBe(2)
})
