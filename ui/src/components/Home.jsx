import { AppBar, Box, Card, Modal, Toolbar, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/Home.css'

import MainToolbar from './Toolbar'
import MainTile from './MainTile'
import AppContext from '../context'

const Home = () => {
  const { entries } = useContext(AppContext)
  // Modal controls
  const [detailOpen, setDetailOpen] = useState(false)
  const handleOpen = () => setDetailOpen(true)
  const handleClose = () => setDetailOpen(false)

  return !entries ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <AppBar style={{ background: '#212121' }}>
        <Toolbar className='appbar'>
          <Typography element='h6' variant='subtitle2'>
            Diabetes Management Log
          </Typography>
          <Typography element='h6' variant='button' style={{ color: '#616161' }}>
            HOME
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className='homePage' style={{ background: '#424242' }}>
        <MainToolbar />
        <div className='tileContainer'>
          {entries.map((entry, i) => {
            return <MainTile data={entry} key={i} details={{ detailOpen, handleOpen, handleClose }} />
          })}
        </div>
      </Card>
      <Modal
        open={detailOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Home
