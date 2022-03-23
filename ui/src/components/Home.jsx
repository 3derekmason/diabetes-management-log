import { AppBar, Card, Paper } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/Home.css'

import Toolbar from './Toolbar'
import MainTile from './MainTile'
import AppContext from '../context'

const Home = () => {
  const { entries } = useContext(AppContext)
  return !entries ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <AppBar style={{ background: '#9e9e9e' }}>Home Page</AppBar>
      <Card className='homePage' style={{ background: '#424242' }}>
        <Toolbar />
        {entries.map((entry, i) => {
          return <MainTile data={entry} key={i} />
        })}
      </Card>
    </div>
  )
}

export default Home
