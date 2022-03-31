import { Box, Button, Modal, Typography } from '@mui/material'

import '../styles/EditEntry.css'

const EditEntry = ({ util }) => {
  return (
    <Modal open={util.editOpen} onClose={util.handleEditClose} className='editModal'>
      <Box className='editBox'>
        <Button>TEST</Button>
      </Box>
    </Modal>
  )
}

export default EditEntry
