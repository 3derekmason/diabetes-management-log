import { AppBar, Button, Card, Paper, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import '../styles/Toolbar.css'
import setValueColor from '../util/setValueColor'
import calcAverage from '../util/calcAverage'
import AppContext from '../context.js'

const MainToolbar = ({ data }) => {
  const { entries, getAllEntries } = useContext(AppContext)
  return (
    <Paper elevation={3} style={{ background: '#212121', color: '#fff' }} className='toolbar'>
      <div className='averageGlucose'>
        <Typography variant='caption' style={{ color: '#fff' }}>
          Average Glucose:{' '}
        </Typography>
        <Typography variant='h3' style={{ color: setValueColor(calcAverage(entries)) }}>
          {calcAverage(entries)}
        </Typography>
      </div>
      <div className='filter'>
        <Typography>Order by: </Typography>
        <Button variant='outlined' size='small'>
          Low to High
        </Button>
        <Button variant='outlined' size='small' onClick={getAllEntries}>
          Date
        </Button>
        <Button variant='outlined' size='small'>
          High to Low
        </Button>
      </div>
      <Button variant='contained' onClick={data.handleCreateOpen}>
        LOG ENTRY
      </Button>
    </Paper>
  )
}

export default MainToolbar
