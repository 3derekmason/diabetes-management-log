// Format date from db result

const getDate = dateString => {
  return typeof dateString === 'string' ? dateString.split(',')[0] : ''
}

module.exports = getDate
