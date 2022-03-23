const getTime = timeString => {
  const time = timeString.split(' ')[4]
  const segments = time.split(':')
  let hour = segments[0]
  let min = segments[1]
  let ampm = 'AM'
  if (hour > 12) {
    hour = 24 - hour
    ampm = 'PM'
  }
  return hour + ':' + min + ' ' + ampm
}

export default getTime
