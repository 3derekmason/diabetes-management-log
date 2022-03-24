import { Button, Card, Paper, Typography } from '@mui/material'
import { useContext, useEffect, useState, useRef } from 'react'

import '../styles/MainTile.css'

import AppContext from '../context.js'

import getDate from '../util/getDate'
import getTime from '../util/getTime'
import setValueColor from '../util/setValueColor'

import Delete from './Delete'

const MainTile = ({ data }) => {
  const [deleteOpen, setDeleteOpen] = useState(false)
  const handleDeleteOpen = () => setDeleteOpen(true)
  const handleDeleteClose = () => setDeleteOpen(false)

  return (
    <Card className='mainTile' style={{ background: '#212121', color: '#Fff' }} onClick={() => console.log(data)}>
      <Typography element='h4' variant='subtitle1' style={{ marginLeft: '24px' }}>
        {getDate(data?.entry?.date)}
      </Typography>
      <Typography variant='h4' style={{ color: setValueColor(data.entry.value) }}>
        {data.entry.value}
      </Typography>
      <Typography element='h5' variant='caption'>
        {getTime(data?.entry?.date)}
      </Typography>
      <Button onClick={data.handleDetailOpen}>View</Button>
      <Button className='deleteButton' onClick={handleDeleteOpen} style={{ color: '#880e4f' }}>
        X
      </Button>
      <Delete details={{ deleteOpen: deleteOpen, handleDeleteClose: handleDeleteClose, id: data.entry.id }} />
    </Card>
  )
}

export default MainTile
