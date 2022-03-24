import { Box, Button, Modal, Typography } from '@mui/material'
import { useContext } from 'react'
import client from '../client'

import '../styles/DeleteModal.css'
import AppContext from '../context'

const Delete = ({ details }) => {
  const { getAllEntries } = useContext(AppContext)
  const deleteEntry = async () => {
    await client
      .delete(`/entries/${details.id}`)
      .then(getAllEntries())
      .then(details.handleDeleteClose())
      .catch(err => console.log(err))
  }
  return (
    <Modal open={details.deleteOpen} onClose={details.handleDeleteClose} className='detailModal'>
      <Box className='deleteView'>
        <Typography variant='h5'>Delete this entry?</Typography>
        <div className='deleteButtons'>
          <Button variant='filled' style={{ color: '#121212' }} onClick={details.handleDeleteClose}>
            No
          </Button>
          <Button variant='filled' style={{ color: '#D50000' }} onClick={deleteEntry}>
            Yes
          </Button>
        </div>
      </Box>
    </Modal>
  )
}

export default Delete
