const calcAverage = require('../src/util/calcAverage.js')

const inputArray = [{ value: 1 }, { value: 2 }, { value: 3 }]

test('Returns correct average from value property within an array of objects', () => {
  expect(calcAverage(inputArray)).toBe(2)
})

test('Returns 0 if inproper input type', () => {
  expect(calcAverage([1, 2, 3])).toBe(0)
})

test('Returns 0 if objects do not contian a value property', () => {
  expect(calcAverage([{ key: 1 }, { key: 2 }, { key: 3 }])).toBe(0)
})
