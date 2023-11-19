'use client';
import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { IonIcon } from '@ionic/react';
import { arrowForwardSharp, chevronForwardOutline, closeCircleOutline } from 'ionicons/icons';
import styles from '../wallet.module.css'

const Wallet = () => {
  return (
    <Stack gap={1}>

      <Stack direction={"row"} sx={{ justifyContent: 'space-between', marginBottom: '20px' }}>
        <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0D1A26' }}>
          Wallet Balance
          <IonIcon icon={arrowForwardSharp} />
        </Typography>
        <Typography sx={{ backgroundColor: '#257611', color: '#fff', borderRadius: '20px', padding: '0px 10px' }}>₹ 12235</Typography>
      </Stack>

      <Stack sx={{ backgroundColor: '#B08D8D', borderRadius: '10px', height: '180px', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ color: '#fff', fontWeight: '500', fontSize: '17px' }}>Carousells</Typography>
      </Stack>

      <Stack gap={1.5} sx={{ border: '1px solid #ABABAB', boxShadow: '0px 2px 10px #e0e0e0', borderRadius: '10px', padding: '15px', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: '600', fontSize: '17px', width: '100%' }}>Add Money to Wallet</Typography>
        <Box className={styles.inputcontainer} style={{ width: '100%' }}>
          <input type="text" placeholder='₹100' className={styles.input} />
          <IonIcon icon={closeCircleOutline} className={styles.closeicon}></IonIcon>
        </Box>
        <Stack gap={2} direction="row" sx={{ justifyContent: 'flex-start', width: '100%' }}>
          {
            addArray.map((item, index) => (
              <Typography key={index} sx={{ border: '1px solid #000', borderRadius: '20px', padding: '0px 8px' }}>{item}</Typography>
            ))
          }
        </Stack>

        <Stack sx={{ width: '70%', marginTop: '20px' }}>
          <Button variant="contained" className={styles.button} style={{ width: '100%', padding: '10px 25px' }}>
            Proceed to Add
          </Button>
        </Stack>

      </Stack>

      <Stack sx={{ margin: '25px 0px', alignItems: 'center' }} gap={1}>
        <Stack sx={{ borderBottom: '1px solid #AEAEAE', width: '95%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }} direction={"row"}>
          <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>Transactions</Typography>
          <IonIcon icon={chevronForwardOutline} style={{ fontSize: '18px' }} />
        </Stack>
        {
          txnArray.map((item, index) => (
            <Stack sx={{margin:'2px 0', width: '90%', justifyContent: 'space-between', alignItems: 'center' }} direction={"row"}>
              <Stack>
                <Typography>{item.title}</Typography>
                <Typography sx={{ color: '#737373', fontSize: '13px' }}>{item.date}</Typography>
              </Stack>
              <Typography sx={[{ fontWeight: '600' }, item.amt>0?{color:'#1BCFB4'}:{color:'#F55E53'}]}>{item.amt>0?"+₹"+item.amt:"₹"+item.amt.split("-")[1]}</Typography>
            </Stack>
          ))
        }
      </Stack>
    </Stack>
  )
}

export default Wallet;

const addArray = [
  '+₹100',
  '+₹200',
  '+₹400',
  '+₹800'
]

const txnArray = [
  {
    title: 'Refund',
    date: '17 Jun 2022, 06:15 PM',
    amt: '400'
  },
  {
    title: 'Ordered on Shoemato',
    date: '17 Jun 2022, 06:15 PM',
    amt: '-400'
  },
  {
    title: 'Added to Wallet',
    date: '17 Jun 2022, 06:15 PM',
    amt: '400'
  }
]