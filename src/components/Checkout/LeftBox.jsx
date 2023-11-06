import React from 'react'
import { Stack, Typography } from '@mui/material';
import Address from './Address';
import Payment from './Payment';
import Contact from './Contact';
import CheckoutButton from './Button';

const LeftBox = () => {
  return (
    <Stack style={{ width: '45%', marginBottom:'130px' }} gap={3}>
      <Address />
      <Contact/>
      <Payment />
      <CheckoutButton/>
    </Stack>
  )
}

export default LeftBox
