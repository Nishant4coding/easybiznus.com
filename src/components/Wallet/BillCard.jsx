import React from 'react'
import { Button, Stack, Typography } from '@mui/material';
import styles from './wallet.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Wallet } from '@/assets/svg';

const BillCard = () => {
  return (
    <Stack gap={3}>
    <Stack className={styles.billcard} gap={7}>
        <Stack gap={1}>
            <Typography sx={{fontSize:'18px', fontWeight:'700'}}>Shoemato Balance</Typography>
            <Typography sx={{fontSize:'14px'}}>Wallet</Typography>
            <Typography sx={{fontSize:'14px'}}>Gift Cards</Typography>
            <Link href="#" style={{color:'#5195F6', fontWeight:'700', fontSize:'14px'}}>Add Money</Link>
        </Stack>
        <Stack gap={1} sx={{alignItems:'flex-end'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'700'}}>₹ 500</Typography>
            <Typography>₹ 500</Typography>
            <Typography>₹ 0.0</Typography>
        </Stack>
    </Stack>
    <Button variant='contained' className={styles.walletbtn}>
      <Image alt="wallet" src={Wallet} width={20}/>
      Request Wallet Statement
    </Button>
    </Stack>
  )
}

export default BillCard
