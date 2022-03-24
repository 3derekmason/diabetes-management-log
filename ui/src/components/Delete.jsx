import { AppBar, Box, Card, Modal, Toolbar, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/DetailModal.css'
import AppContext from '../context'

const Delete = ({ details }) => {
  return (
    <Modal open={details.deleteOpen} onClose={details.handleDeleteClose} className='detailModal'>
      <Box className='detailView'>
        <Typography variant='h6' component='h2'>
          Text in a modal
        </Typography>
        <Typography sx={{ mt: 2 }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
      </Box>
    </Modal>
  )
}

export default Delete
