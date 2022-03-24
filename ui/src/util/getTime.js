//Format time from db result

const getTime = timeString => {
  const time = timeString.split(',')[1]
  const timeSegments = time.split(':')
  const hour = timeSegments[0]
  const min = timeSegments[1]
  const ampm = timeSegments[2].split(' ')[1]

  return hour + ':' + min + ' ' + ampm
}

export default getTime
