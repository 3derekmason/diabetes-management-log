// Calculate average value from array of entries

const calcAverage = entryArray => {
  let sum = 0
  //Handle empty array or invalid argument type
  if (entryArray.length < 1 || !Array.isArray(entryArray)) {
    return 0
  }
  entryArray.forEach(entry => {
    // check for a value property, if doesnt exist, sum doesnt increase
    sum += entry['value'] ? entry['value'] : 0
  })
  // Average = sum/number of entries
  return Math.floor(sum / entryArray.length)
}
module.exports = calcAverage
