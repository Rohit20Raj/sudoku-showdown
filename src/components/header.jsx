import { Stack, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Stack direction={'column'} alignItems={'center'}>
      <Typography
        id="heading"
      >
        SUDOKU-SHOWDOWN
      </Typography>
      <Typography
        id="sub-heading"
      >
        Enter your puzzle, and watch it get solved instantly.
      </Typography>
    </Stack>
  )
}

export default Header