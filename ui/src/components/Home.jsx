import { AppBar, Box, Card, Modal, Toolbar, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/Home.css'

import MainToolbar from './Toolbar'
import MainTile from './MainTile'
import DetailedView from './DetailedView'
import CreateNew from './CreateNew'
import AppContext from '../context'

const Home = () => {
  const { entries } = useContext(AppContext)
  // Modal controls
  const [detailOpen, setDetailOpen] = useState(false)
  const handleDetailOpen = () => setDetailOpen(true)
  const handleDetailClose = () => setDetailOpen(false)
  const [createOpen, setCreateOpen] = useState(false)
  const handleCreateOpen = () => setCreateOpen(true)
  const handleCreateClose = () => setCreateOpen(false)
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
      <Card className='homePage' style={{ background: '#121212' }}>
        <MainToolbar data={{ createOpen, handleCreateClose, handleCreateOpen }} />
        <div className='tileContainer'>
          {entries.map((entry, i) => {
            return <MainTile data={{ entry, detailOpen, handleDetailOpen, handleDetailClose }} key={i} />
          })}
        </div>
        <DetailedView details={{ detailOpen, handleDetailClose, handleDetailOpen }} />
        <CreateNew details={{ createOpen, handleCreateClose, handleCreateOpen }} />
      </Card>
    </div>
  )
}

export default Home
