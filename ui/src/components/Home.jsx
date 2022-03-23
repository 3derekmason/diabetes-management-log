import { AppBar, Card, Paper, Toolbar, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/Home.css'

import MainToolbar from './Toolbar'
import MainTile from './MainTile'
import AppContext from '../context'

const Home = () => {
  const { entries } = useContext(AppContext)
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
        {entries.map((entry, i) => {
          return <MainTile data={entry} key={i} />
        })}
      </Card>
    </div>
  )
}

export default Home
