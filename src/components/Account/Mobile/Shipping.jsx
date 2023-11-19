import { Stack, Typography } from '@mui/material'
import React from 'react'

const Shipping = () => {
  return (
    <Stack sx={{width:'100%'}} gap={3}>
      <Stack gap={1}>
        <Typography sx={{fontWeight:'600'}}>What is Shoemato’s Shipping Policy ?</Typography>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
      </Stack>

      <Stack gap={1}>
        <Typography sx={{fontWeight:'600'}}>What is Shoemato’s return Policy? How does it work?</Typography>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
      </Stack>
    </Stack>
  )
}

export default Shipping
