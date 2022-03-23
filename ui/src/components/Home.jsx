import { AppBar, Card, Paper } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/Home.css'

import MainTile from './MainTile.jsx'
import AppContext from '../context.js'

const Home = () => {
  const { entries } = useContext(AppContext)
  return !entries ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <AppBar style={{ background: '#9e9e9e' }}>Home Page</AppBar>
      <Card className='homePage' style={{ background: '#424242' }}>
        {entries.map((entry, i) => {
          return <MainTile data={entry} key={i} />
        })}
      </Card>
    </div>
  )
}

export default Home
