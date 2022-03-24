const calcAverage = entryArray => {
  let sum = 0
  entryArray.forEach(entry => {
    sum += entry['value']
  })
  return sum / entryArray.length
}
export default calcAverage
