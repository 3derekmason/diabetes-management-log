import { AppBar, Button, Card, Paper, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/Toolbar.css'
import AppContext from '../context.js'

const MainToolbar = () => {
  return (
    <Paper elevation={3} style={{ background: '#424242' }} className='toolbar'>
      <div className='averageGlucose'>
        <Typography>Average: </Typography>
        <Typography>###</Typography>
      </div>
      <div className='filter'>Sort by:</div>
      <Button>LOG ENTRY</Button>
    </Paper>
  )
}

export default MainToolbar
