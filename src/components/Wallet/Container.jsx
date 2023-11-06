import React from 'react'
import { Stack, Typography } from '@mui/material';
import styles from './wallet.module.css';
import AddCard from './AddCard';
import Coupons from './Coupons';
import Pricing from './Pricing';

const Container = () => {
  return (
    <Stack direction="column" className={styles.container}>
      <Typography className={styles.heading}>Shoemato Wallet</Typography>
      <Stack direction={"row"} className={styles.cardcontainer}>
        <Stack style={{width:'50%'}}>
          <Pricing/>
          <AddCard />
        </Stack>
        <Coupons />
      </Stack>
    </Stack>
  )
}

export default Container
