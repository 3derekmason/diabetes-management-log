import { useState } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'

import EditEntry from './EditEntry.jsx'

import setValueColor from '../util/setValueColor'
import setRangeValue from '../util/setRangeValue'
import getDate from '../util/getDate'
import getTime from '../util/getTime'
import '../styles/DetailModal.css'

const DetailedView = ({ details }) => {
  const [editOpen, setEditOpen] = useState(false)
  const handleEditOpen = () => setEditOpen(true)
  const handleEditClose = () => setEditOpen(false)

  return (
    <div>
      <Modal open={details.detailOpen} onClose={details.handleDetailClose} className='detailModal'>
        <Box className='detailView'>
          <div className='detailHeader'>
            <Typography variant='subtitle2'>Entry from: </Typography>
            <Typography variant='h5'>{getDate(details.entry.date)}</Typography>
          </div>
          <div>
            <Button size='small' style={{ color: '#546E7A' }} onClick={handleEditOpen}>
              Edit
            </Button>
          </div>
          <div className='detailRow'>
            <Typography variant='caption'>Blood Sugar: </Typography>
            <Typography variant='h1' style={{ color: setValueColor(details.entry.value) }}>
              {details.entry.value}
            </Typography>
          </div>
          <div className='detailRow'>
            <Typography variant='caption'>Range:</Typography>
            <Typography variant='caption' style={{ color: setValueColor(details.entry.value) }}>
              {setRangeValue(details.entry?.value)}
            </Typography>
          </div>
          <div className='detailRow'>
            <Typography variant='caption'>Time logged: </Typography>
            <Typography variant='subtitle2'>{getTime(details.entry.date)}</Typography>
          </div>
          <div className='detailRow'>
            <Typography variant='caption'>Comments: </Typography>
            <Typography variant='subtitle1'>{details.entry.comment}</Typography>
          </div>
          <Button style={{ color: '#d50000' }} onClick={details.handleDetailClose}>
            Close
          </Button>
        </Box>
      </Modal>
      <EditEntry util={{ editOpen: editOpen, handleEditClose: handleEditClose, entry: details.entry }} />
    </div>
  )
}

export default DetailedView
