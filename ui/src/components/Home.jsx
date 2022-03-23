import { AppBar, Card, Paper } from '@mui/material'
import { useEffect, useState } from 'react'

import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <AppBar style={{ background: '#9e9e9e' }}>Home Page</AppBar>
      <Card className='homePage' style={{ background: '#424242' }}></Card>
    </div>
  )
}

export default Home
