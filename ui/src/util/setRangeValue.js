//Conditionaly render glucose value label based on ranges

const setRangeValue = num => {
  return num < 76 ? 'LOW' : num > 75 && num < 136 ? 'NORMAL' : num > 135 && num < 200 ? 'HIGH' : 'VERY HIGH'
}

module.exports = setRangeValue
