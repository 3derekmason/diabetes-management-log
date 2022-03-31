// Format date from db result

const getDate = dateString => {
  return dateString.split(',')[0]
}

module.exports = getDate
