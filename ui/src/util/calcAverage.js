// Calculate average value from array of entries

const calcAverage = entryArray => {
  let sum = 0
  entryArray.forEach(entry => {
    sum += entry['value'] ? entry['value'] : 0
  })
  return Math.floor(sum / entryArray.length)
}
module.exports = calcAverage
