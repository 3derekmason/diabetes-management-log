import { Box, Button, Modal, TextField, Typography } from '@mui/material'

import '../styles/EditEntry.css'
import getDate from '../util/getDate'
import getTime from '../util/getTime'
import setValueColor from '../util/setValueColor'

const EditEntry = ({ util }) => {
  return (
    <Modal open={util.editOpen} onClose={util.handleEditClose} className='editModal'>
      <Box className='editBox'>
        <div className='editHeader'>
          <Typography variant='h4'>{getDate(util.entry.date)}</Typography>
          <Typography variant='body2'>{getTime(util.entry.date)}</Typography>
        </div>
        <div className='editRow'>
          <Typography variant='caption'>Edit blood sugar: </Typography>
          <TextField placeholder={util.entry.value}></TextField>
        </div>
        <div className='editRow'>
          <Typography variant='caption'>Edit comment: </Typography>
          <TextField placeholder={util.entry.comment}></TextField>
        </div>
        <Button style={{ color: '#37474f' }}>Update Entry</Button>
      </Box>
    </Modal>
  )
}

export default EditEntry
