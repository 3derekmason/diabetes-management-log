import { Button, Card, Typography } from '@mui/material'
import { useMemo, useState } from 'react'

import '../styles/MainTile.css'

import getDate from '../util/getDate'
import getTime from '../util/getTime'
import setValueColor from '../util/setValueColor'

import Delete from './Delete'
import DetailedView from './DetailedView'

const MainTile = ({ entry }) => {
  // Modal controls
  const [deleteOpen, setDeleteOpen] = useState(false)
  const handleDeleteOpen = () => setDeleteOpen(true)
  const handleDeleteClose = () => setDeleteOpen(false)
  const [detailOpen, setDetailOpen] = useState(false)
  const handleDetailOpen = () => setDetailOpen(true)
  const handleDetailClose = () => setDetailOpen(false)

  const fontColor = useMemo(() => setValueColor(entry.value), [entry.value])

  return (
    <Card className='mainTile' style={{ background: '#212121', color: '#Fff' }}>
      <Typography element='h4' variant='subtitle1' style={{ marginLeft: '24px' }}>
        {getDate(entry?.date)}
      </Typography>
      <Typography variant='h4' style={{ color: setValueColor(entry.value) }}>
        {entry.value}
      </Typography>
      <Typography element='h5' variant='caption'>
        {getTime(entry?.date)}
      </Typography>
      <Button onClick={handleDetailOpen}>View</Button>
      <Button className='deleteButton' onClick={handleDeleteOpen} size='small' style={{ color: '#d50000' }}>
        X
      </Button>
      <DetailedView entry={entry} detailOpen={detailOpen} handleDetailClose={handleDetailClose} fontColor={fontColor} />
      <Delete deleteOpen={deleteOpen} handleDeleteClose={handleDeleteClose} id={entry.id} />
    </Card>
  )
}

export default MainTile
