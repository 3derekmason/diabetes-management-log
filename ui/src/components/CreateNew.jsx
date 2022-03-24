import { AppBar, Box, Button, Card, Modal, Paper, TextField, Toolbar, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/CreateNew.css'
import AppContext from '../context'

const CreateNew = ({ details }) => {
  return (
    <Modal open={details.createOpen} onClose={details.handleCreateClose} className='createNew'>
      <Card style={{ background: '#424242', color: '#fff' }} className='createNewEntry'>
        <Typography variant='h6' style={{ color: '#e0f7fa' }}>
          What is your blood sugar?
        </Typography>
        <div className='formRow'>
          <Typography variant='subtitle2'>Current glucose level: </Typography>
          <TextField
            type='number'
            InputLabelProps={{
              shrink: true
            }}
            size='small'
            variant='filled'
            style={{ width: '80px' }}
            sx={{ input: { color: 'white' } }}
          />
        </div>
        <Typography>Comments: </Typography>
        <TextField placeholder='Ex: After meal' multiline variant='standard' style={{ width: '95%' }} />
        <div className='formRow'>
          <Button style={{ marginTop: '16px' }}>Log Entry</Button>
        </div>
      </Card>
    </Modal>
  )
}

export default CreateNew
