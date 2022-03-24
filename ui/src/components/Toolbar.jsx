import { AppBar, Card, Paper } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/Toolbar.css'
import AppContext from '../context.js'

const MainToolbar = () => {
  return (
    <Paper elevation={3} style={{ background: '#424242' }} className='toolbar'>
      Toolbar
    </Paper>
  )
}

export default MainToolbar
