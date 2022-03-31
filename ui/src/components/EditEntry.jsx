import { Box, Button, Modal, Typography } from '@mui/material'
import { useContext, useState } from 'react'

import AppContext from '../context'

const EditEntry = ({ util }) => {
  return (
    <Modal open={util.editOpen} onClose={util.handleEditClose} className='editModal'>
      <Box>
        <Button>TEST</Button>
      </Box>
    </Modal>
  )
}

export default EditEntry
