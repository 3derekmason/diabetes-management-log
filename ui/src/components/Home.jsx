import { AppBar, Box, Card, Modal, Toolbar, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/Home.css'

import MainToolbar from './Toolbar'
import MainTile from './MainTile'
import DetailedView from './DetailedView'
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
    <div className='homeContainer'>
      <AppBar style={{ background: '#212121', cursor: 'default' }}>
        <Toolbar className='appbar'>
          <Typography element='h6' variant='subtitle2'>
            <strong>DML</strong> - Diabetes Management Log
          </Typography>
          <Typography element='h6' variant='button' style={{ color: '#616161' }}>
            HOME
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className='homePage' style={{ background: '#212121' }}>
        <MainToolbar />
        <div className='tileContainer'>
          {entries.map((entry, i) => {
            return <MainTile data={{ entry, detailOpen, handleOpen, handleClose }} key={i} />
          })}
        </div>
        <DetailedView details={{ detailOpen, handleClose, handleOpen }} />
      </Card>
    </div>
  )
}

export default Home
