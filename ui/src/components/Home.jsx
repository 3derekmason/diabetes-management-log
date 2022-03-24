import { AppBar, Box, Card, Modal, Toolbar, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/Home.css'

import MainToolbar from './Toolbar'
import MainTile from './MainTile'
import DetailedView from './DetailedView'
import CreateNew from './CreateNew'
import Delete from './Delete'
import AppContext from '../context'

const Home = () => {
  const { entries } = useContext(AppContext)
  // Modal controls
  const [createOpen, setCreateOpen] = useState(false)
  const handleCreateOpen = () => setCreateOpen(true)
  const handleCreateClose = () => setCreateOpen(false)

  return !entries ? (
    <h1>Loading...</h1>
  ) : (
    <div className='homeContainer'>
      <AppBar style={{ background: '#212121', cursor: 'default' }}>
        <Toolbar className='appbar'>
          <Typography element='h6' variant='subtitle2' style={{ color: '#fff' }}>
            <strong>DML</strong> - Diabetes Management Log
          </Typography>
          <Typography element='h6' variant='button' style={{ color: '#616161' }}>
            HOME
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className='homePage' style={{ background: '#121212' }}>
        <MainToolbar data={{ handleCreateOpen }} />
        <div className='tileContainer'>
          {entries.map((entry, i) => {
            return <MainTile data={{ entry }} key={i} />
          })}
        </div>
        <CreateNew details={{ createOpen, handleCreateClose, handleCreateOpen }} />
      </Card>
    </div>
  )
}

export default Home
