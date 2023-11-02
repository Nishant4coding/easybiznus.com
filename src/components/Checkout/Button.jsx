'use client'
import React, {useState} from 'react'
import { Button, Stack } from '@mui/material';
import styles from './checkout.module.css';
import Strip from '../Cart/Strip';
import PlacedPopup from './PlacedPopup';

const CheckoutButton = () => {
  const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Stack style={{ width: '100%', }}>
      <Button variant='contained' className={styles.button} onClick={handleOpen}>
        PLACE YOUR ORDER
      </Button>
      <Strip />
      <PlacedPopup open={open} handleClose={handleClose} />
    </Stack>
  )
}

export default CheckoutButton
