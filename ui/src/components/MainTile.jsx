import { AppBar, Card, Paper } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../context.js'

import getDate from '../util/getDate'
import getTime from '../util/getTime'
import setValueColor from '../util/setValueColor'

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
