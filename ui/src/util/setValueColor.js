//Conditionaly render glucose value color based on ranges

const setValueColor = num => {
  return num < 76 ? '#2962ff' : num > 75 && num < 136 ? '#00c853' : num > 135 && num < 200 ? '#ff6d00' : '#b71c1c'
}

export default setValueColor
