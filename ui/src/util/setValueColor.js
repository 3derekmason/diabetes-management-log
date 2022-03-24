const setValueColor = num => {
  return num < 76 ? '#0d47a1' : num > 75 && num < 136 ? '#00c853' : num > 135 && num < 200 ? '#ff6f00' : '#b71c1c'
}

export default setValueColor
