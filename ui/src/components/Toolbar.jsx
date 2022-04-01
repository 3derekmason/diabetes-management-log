import { Button, Paper, Typography } from '@mui/material'
import { useContext } from 'react'

import '../styles/Toolbar.css'
import setValueColor from '../util/setValueColor'
import calcAverage from '../util/calcAverage'
import AppContext from '../context.js'

const MainToolbar = ({ handleCreateOpen }) => {
  const { entries, setLowVal, setHighVal } = useContext(AppContext)

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
        <Typography variant='body2'>Order by: </Typography>
        <Button
          variant='outlined'
          size='small'
          onClick={() => {
            setHighVal(false)
            setLowVal(true)
          }}
        >
          Low to High
        </Button>
        <Button
          variant='outlined'
          size='small'
          onClick={() => {
            setLowVal(false)
            setHighVal(false)
          }}
        >
          Date
        </Button>
        <Button
          variant='outlined'
          size='small'
          onClick={() => {
            setLowVal(false)
            setHighVal(true)
          }}
        >
          High to Low
        </Button>
      </div>
      <Button variant='contained' onClick={handleCreateOpen}>
        LOG ENTRY
      </Button>
    </Paper>
  )
}

export default MainToolbar
