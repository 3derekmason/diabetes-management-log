import { Card, Paper, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/MainTile.css'

import AppContext from '../context.js'

import getDate from '../util/getDate'
import getTime from '../util/getTime'
import setValueColor from '../util/setValueColor'

const MainTile = ({ data }) => {
  return (
    <Card className='mainTile'>
      <h1 style={{ color: setValueColor(data.value) }}>{data.value}</h1>
      <div className='dateTime'>
        <Typography element='h4' variant='subtitle1'>
          {getDate(data.date)}
        </Typography>
        <Typography element='h5' variant='caption'>
          {getTime(data.date)}
        </Typography>
      </div>
    </Card>
  )
}

export default MainTile
