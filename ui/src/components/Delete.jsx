import { AppBar, Box, Button, Card, Modal, Toolbar, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import client from '../client'

import '../styles/DeleteModal.css'
import AppContext from '../context'

const Delete = ({ details }) => {
  const { getAllEntries } = useContext(AppContext)
  const deleteEntry = async id => {
    await client
      .delete('/entries', { data: { id } })
      .then(getAllEntries())
      .catch(err => console.log(err))
    details.handleDeleteClose()
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
