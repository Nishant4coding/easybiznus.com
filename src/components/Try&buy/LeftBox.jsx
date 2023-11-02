import React from 'react'
import { Stack, Typography } from '@mui/material';
import styles from './try.module.css';
import TimeSlot from './TimeSlot';
import Address from './Address';
import Payment from './Payment';
import Contact from './Contact';

const LeftBox = () => {
  return (
    <Stack style={{ width: '45%', marginBottom:'130px' }} gap={3}>
      <TimeSlot />
      <Address />
      <Contact/>
      <Payment />
    </Stack>
  )
}

export default LeftBox
