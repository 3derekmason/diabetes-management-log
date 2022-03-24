import { Button, Card, Paper, Typography } from '@mui/material'
import { useContext, useEffect, useState, useRef } from 'react'

import '../styles/MainTile.css'

import AppContext from '../context.js'

import getDate from '../util/getDate'
import getTime from '../util/getTime'
import setValueColor from '../util/setValueColor'

import Delete from './Delete'
import DetailedView from './DetailedView'

const MainTile = ({ data }) => {
  // Modal controls
  const [deleteOpen, setDeleteOpen] = useState(false)
  const handleDeleteOpen = () => setDeleteOpen(true)
  const handleDeleteClose = () => setDeleteOpen(false)
  const [detailOpen, setDetailOpen] = useState(false)
  const handleDetailOpen = () => setDetailOpen(true)
  const handleDetailClose = () => setDetailOpen(false)

  return (
    <Card className='mainTile' style={{ background: '#212121', color: '#Fff' }}>
      <Typography element='h4' variant='subtitle1' style={{ marginLeft: '24px' }}>
        {getDate(data?.entry?.date)}
      </Typography>
      <Typography variant='h4' style={{ color: setValueColor(data.entry.value) }}>
        {data.entry.value}
      </Typography>
      <Typography element='h5' variant='caption'>
        {getTime(data?.entry?.date)}
      </Typography>
      <Button onClick={handleDetailOpen}>View</Button>
      <Button className='deleteButton' onClick={handleDeleteOpen} style={{ color: '#880e4f' }}>
        X
      </Button>
      <DetailedView details={{ entry: data.entry, detailOpen: detailOpen, handleDetailClose: handleDetailClose }} />
      <Delete details={{ deleteOpen: deleteOpen, handleDeleteClose: handleDeleteClose, id: data.entry.id }} />
    </Card>
  )
}

export default MainTile
