import { AppBar, Card, Paper } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../context.js'

const getDate = dateString => {
  return dateString.split(' ').splice(0, 3).join(' ')
}
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

const MainTile = ({ data }) => {
  return (
    <Card className='mainTile'>
      <h1>{data.value}</h1>
      <div className='dateTime'>
        <h3>{getDate(data.date)}</h3>
        <h4>{getTime(data.date)}</h4>
      </div>
    </Card>
  )
}

export default MainTile
