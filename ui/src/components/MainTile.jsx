import { Card, Paper, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/MainTile.css'

import AppContext from '../context.js'

import getDate from '../util/getDate'
import getTime from '../util/getTime'
import setValueColor from '../util/setValueColor'

const MainTile = ({ data }) => {
  return (
    <Card className='mainTile' onClick={data.handleOpen} style={{ background: '#eee' }}>
      <h1 style={{ color: setValueColor(data.entry.value) }}>{data.entry.value}</h1>
      <div className='dateTime'>
        <Typography element='h4' variant='subtitle1'>
          {getDate(data.entry.date)}
        </Typography>
        <Typography element='h5' variant='caption'>
          {getTime(data.entry.date)}
        </Typography>
      </div>
    </Card>
  )
}

export default MainTile
