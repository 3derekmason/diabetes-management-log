import { Button, Card, Modal, TextField, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import client from '../client'

import '../styles/CreateNew.css'
import AppContext from '../context'

const CreateNew = ({ createOpen, close }) => {
  const { getAllEntries } = useContext(AppContext)

  // Blank form values
  const [newGlucose, setNewGlucose] = useState('')
  const [newComments, setNewComments] = useState('')

  const handleSubmit = () => {
    const dateString = new Date()
    const newEntryData = {
      date: dateString.toLocaleString(),
      value: newGlucose,
      comments: newComments
    }
    //clear form and close after posting
    setNewComments('')
    setNewGlucose('')
    client
      .post('/entries', newEntryData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    // reorder by most recent if not
    getAllEntries()
    close()
  }

  return (
    <Modal open={createOpen} onClose={close} className='createNew'>
      <Card style={{ background: '#e0e0e0', color: '#121212' }} className='createNewEntry'>
        <Typography variant='h6' style={{ color: '#212121' }}>
          What is your blood sugar?
        </Typography>
        <Typography variant='subtitle2'>Current glucose level: </Typography>
        <TextField
          type='number'
          required
          autoFocus
          variant='standard'
          size='small'
          style={{ width: '95%' }}
          value={newGlucose}
          onChange={e => {
            e.preventDefault()
            setNewGlucose(e.target.value)
          }}
        />
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
