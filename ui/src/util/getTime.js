//Format time from db result

const getTime = timeString => {
  if (!timeString) {
    return ''
  }
  const time = timeString.split(',')[1]
  const timeSegments = time.split(':')
  let hour = timeSegments[0]
  hour = hour.slice(1)
  let min = timeSegments[1]
  let ampm = timeSegments[2].split(' ')[1]

  return typeof timeString === 'string' ? hour + ':' + min + ' ' + ampm : ''
}

module.exports = getTime
