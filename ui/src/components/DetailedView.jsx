import { useReducer } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'

import EditEntry from './EditEntry.jsx'

import setRangeValue from '../util/setRangeValue'
import getDate from '../util/getDate'
import getTime from '../util/getTime'
import '../styles/DetailModal.css'

const DetailedView = ({ entry, detailOpen, handleDetailClose, fontColor }) => {
  // Edit entry modal controls
  const initiallyOpen = { isEditOpen: false }
  const editModalReducer = (state, action) => {
    switch (action.type) {
      case 'open':
        return { isEditOpen: true }
      case 'close':
        return { isEditOpen: false }
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(editModalReducer, initiallyOpen)
  const handleEditOpen = () => {
    dispatch({ type: 'open' })
  }

  return (
    <>
      <Modal open={detailOpen} onClose={handleDetailClose} className='detailModal'>
        <Box className='detailView'>
          <div className='detailHeader'>
            <Typography variant='subtitle2'>Entry from: </Typography>
            <Typography variant='h5'>{getDate(entry.date)}</Typography>
          </div>
          <div>
            <Button size='small' style={{ color: '#84ffff' }} onClick={handleEditOpen}>
              Edit
            </Button>
          </div>
          <div className='detailRow'>
            <Typography variant='caption'>Blood Sugar: </Typography>
            <Typography variant='h1' style={{ color: fontColor }}>
              {entry.value}
            </Typography>
          </div>
          <div className='detailRow'>
            <Typography variant='caption'>Range:</Typography>
            <Typography variant='caption' style={{ color: fontColor }}>
              {setRangeValue(entry?.value)}
            </Typography>
          </div>
          <div className='detailRow'>
            <Typography variant='caption'>Time logged: </Typography>
            <Typography variant='subtitle2'>{getTime(entry.date)}</Typography>
          </div>
          <div className='detailRow'>
            <Typography variant='caption'>Comments: </Typography>
            <Typography variant='subtitle1'>{entry.comment}</Typography>
          </div>
          <Button style={{ color: '#d50000' }} onClick={handleDetailClose}>
            Close
          </Button>
        </Box>
      </Modal>
      <EditEntry entry={entry} state={state} handleEditClose={() => dispatch({ type: 'close' })} />
    </>
  )
}

export default DetailedView
