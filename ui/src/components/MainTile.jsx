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

const setValueColor = num => {
  return num < 76 ? '#0d47a1' : num > 75 && num < 136 ? '#1b5e20' : num > 135 && num < 200 ? '#ff6f00' : '#b71c1c'
}

const MainTile = ({ data }) => {
  return (
    <Card className='mainTile'>
      <h1 style={{ color: setValueColor(data.value) }}>{data.value}</h1>
      <div className='dateTime'>
        <h3>{getDate(data.date)}</h3>
        <h4>{getTime(data.date)}</h4>
      </div>
    </Card>
  )
}

export default MainTile
