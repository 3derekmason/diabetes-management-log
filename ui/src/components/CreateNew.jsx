import { AppBar, Box, Card, Modal, Paper, TextField, Toolbar, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/CreateNew.css'
import AppContext from '../context'

const CreateNew = ({ details }) => {
  return (
    <Modal open={details.createOpen} onClose={details.handleCreateClose} className='createNew'>
      <Card className='createNewEntry'>
        <form>
          <TextField>Hello</TextField>
        </form>
      </Card>
    </Modal>
  )
}

export default CreateNew
