import { Box, Button, Modal, Typography } from '@mui/material'

import setValueColor from '../util/setValueColor'
import setRangeValue from '../util/setRangeValue'
import getDate from '../util/getDate'
import getTime from '../util/getTime'
import '../styles/DetailModal.css'

const DetailedView = ({ details }) => {
  return (
    <Modal open={details.detailOpen} onClose={details.handleDetailClose} className='detailModal'>
      <Box className='detailView'>
        <div className='detailHeader'>
          <Typography variant='subtitle2'>Entry from: </Typography>
          <Typography variant='h4'>{getDate(details.entry.date)}</Typography>
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
  )
}

export default DetailedView
