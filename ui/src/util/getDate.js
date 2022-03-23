const getDate = dateString => {
  return dateString.split(' ').splice(0, 3).join(' ')
}

export default getDate
