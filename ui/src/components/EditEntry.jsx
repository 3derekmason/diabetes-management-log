import { Box, Button, Card, Modal, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import client from '../client'

import '../styles/EditEntry.css'
import getDate from '../util/getDate'
import getTime from '../util/getTime'

const EditEntry = ({ util }) => {
  const [newGlucose, setNewGlucose] = useState(util.entry?.value)
  const [newComments, setNewComments] = useState(util.entry?.comment)

  const handleUpdate = () => {
    const newEntryData = {
      value: newGlucose,
      comments: newComments
    }
    client
      .put(`/entries/${util.entry.id}`, newEntryData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    util.handleEditClose()
  }
  return (
    <Modal open={util.editOpen} onClose={util.handleEditClose} className='editModal'>
      <Box className='editBox'>
        <div className='editHeader'>
          <Typography variant='h4'>{getDate(util.entry.date)}</Typography>
          <Typography variant='body2'>{getTime(util.entry.date)}</Typography>
        </div>
        <Card className='editRow' style={{ background: '#e0f7fa' }}>
          <Typography variant='h6'>Edit blood sugar: </Typography>
          <TextField
            autoFocus
            value={newGlucose}
            onChange={e => {
              e.preventDefault()
              if (e.target.value !== '') {
                setNewGlucose(e.target.value)
              }
            }}
          ></TextField>
        </Card>
        <Card className='editRow' style={{ background: '#e0f7fa' }}>
          <Typography variant='h6'>Edit comment: </Typography>
          <TextField
            autoFocus
            multiline
            value={newComments}
            onChange={e => {
              e.preventDefault()
              setNewComments(e.target.value)
            }}
          ></TextField>
        </Card>
        <Button onClick={handleUpdate}>Update Entry</Button>
      </Box>
    </Modal>
  )
}

export default EditEntry
