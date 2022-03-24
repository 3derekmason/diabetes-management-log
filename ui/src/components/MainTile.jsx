import { Button, Card, Paper, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/MainTile.css'

import AppContext from '../context.js'

import getDate from '../util/getDate'
import getTime from '../util/getTime'
import setValueColor from '../util/setValueColor'

const MainTile = ({ data }) => {
  return (
    <Card className='mainTile' style={{ background: '#212121', color: '#Fff' }}>
      <Typography element='h4' variant='subtitle1' style={{ marginLeft: '24px' }}>
        {getDate(data.entry.date)}
      </Typography>
      <Typography variant='h4' style={{ color: setValueColor(data.entry.value) }}>
        {data.entry.value}
      </Typography>
      <Typography element='h5' variant='caption'>
        {getTime(data.entry.date)}
      </Typography>
      <Button onClick={data.handleDetailOpen} style={{ color: '#84ffff' }}>
        View
      </Button>
      <Button className='deleteButton' style={{ color: '#880e4f' }}>
        X
      </Button>
    </Card>
  )
}

export default MainTile
