import { AppBar, Box, Button, Card, Modal, Paper, TextField, Toolbar, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import client from '../client'

import '../styles/CreateNew.css'
import AppContext from '../context'

const CreateNew = ({ details }) => {
  const { getAllEntries } = useContext(AppContext)
  const [newGlucose, setNewGlucose] = useState('')
  const [newComments, setNewComments] = useState('')

  const handleSubmit = () => {
    const dateString = new Date()
    const newEntryData = {
      date: dateString.toLocaleString(),
      value: newGlucose,
      comments: newComments
    }
    setNewComments('')
    setNewGlucose('')
    client
      .post('/entries', newEntryData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    getAllEntries()
    details.handleCreateClose()
  }

  return (
    <Modal open={details.createOpen} onClose={details.handleCreateClose} className='createNew'>
      <Card style={{ background: '#e0e0e0', color: '#121212' }} className='createNewEntry'>
        <Typography variant='h6' style={{ color: '#212121' }}>
          What is your blood sugar?
        </Typography>
        <div className='formRow'>
          <Typography variant='subtitle2'>Current glucose level: </Typography>
          <TextField
            type='number'
            required
            autoFocus
            InputLabelProps={{
              shrink: true
            }}
            size='small'
            variant='filled'
            style={{ width: '80px' }}
            value={newGlucose}
            onChange={e => {
              e.preventDefault()
              setNewGlucose(e.target.value)
            }}
          />
        </div>
        <Typography>Comments: </Typography>
        <TextField
          placeholder='Ex: After meal'
          multiline
          autoFocus
          variant='standard'
          style={{ width: '95%' }}
          value={newComments}
          onChange={e => {
            e.preventDefault()
            setNewComments(e.target.value)
          }}
        />
        <div className='formRow'>
          <Button style={{ marginTop: '16px', background: '#424242' }} onClick={handleSubmit}>
            Log Entry
          </Button>
        </div>
      </Card>
    </Modal>
  )
}

export default CreateNew
