import { AppBar, Box, Button, Card, Modal, Toolbar, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/DeleteModal.css'
import AppContext from '../context'

const Delete = ({ details }) => {
  return (
    <Modal open={details.deleteOpen} onClose={details.handleDeleteClose} className='detailModal'>
      <Box className='deleteView'>
        <Typography variant='h5'>Delete this entry?</Typography>
        <div className='deleteButtons'>
          <Button variant='filled' style={{ color: '#121212' }} onClick={details.handleDeleteClose}>
            No
          </Button>
          <Button variant='filled' style={{ color: '#D50000' }} onClick={() => console.log(details.id)}>
            Yes
          </Button>
        </div>
      </Box>
    </Modal>
  )
}

export default Delete
