import { FC } from 'react'
import { AppBar, Toolbar } from '@mui/material'

const Header: FC = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar variant='dense'></Toolbar>
    </AppBar>
  )
}

export default Header
