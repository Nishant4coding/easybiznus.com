'use client'
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../wallet.module.css';
import React from 'react';
import { Wallet } from '@/assets/svg';

const WalletTxn = () => {
    return (
        <Stack sx={{ width: '100%', alignItems: 'center' }} gap={1}>
            <Stack sx={{ borderBottom: '1px solid #AEAEAE', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }} direction={"row"}>
                <Typography sx={{ fontWeight: '600', fontSize: '18px', width: 'fit-content' }}>Transactions</Typography>
            </Stack>

            {
                txnArray.map((item, index) => (
                    <Stack sx={{ margin: '2px 0', width: '90%', justifyContent: 'space-between', alignItems: 'center' }} direction={"row"}>
                        <Stack>
                            <Typography>{item.title}</Typography>
                            <Typography sx={{ color: '#737373', fontSize: '13px' }}>{item.date}</Typography>
                        </Stack>
                        <Typography sx={[{ fontWeight: '600' }, item.amt > 0 ? { color: '#1BCFB4' } : { color: '#F55E53' }]}>{item.amt > 0 ? "+₹" + item.amt : "₹" + item.amt.split("-")[1]}</Typography>
                    </Stack>
                ))
            }

            <Button sx={{marginTop:'50px'}} variant='contained' className={styles.walletbtn}>
                <Image alt="wallet" src={Wallet} width={20} />
                Request Wallet Statement
            </Button>
        </Stack>
    )
}

export default WalletTxn;


const txnArray = [
    {
        title: 'Refund',
        date: '17 Jun 2022, 06:15 PM',
        amt: '400'
    },
    {
        title: 'Refund',
        date: '17 Jun 2022, 06:15 PM',
        amt: '1000'
    },
    {
        title: 'Ordered on Shoemato',
        date: '17 Jun 2022, 06:15 PM',
        amt: '-400'
    },
    {
        title: 'Ordered on Shoemato',
        date: '17 Jun 2022, 06:15 PM',
        amt: '-400'
    },
    {
        title: 'Ordered on Shoemato',
        date: '17 Jun 2022, 06:15 PM',
        amt: '-400'
    },
    {
        title: 'Ordered on Shoemato',
        date: '17 Jun 2022, 06:15 PM',
        amt: '-400'
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
    },
    {
        title: 'Added to Wallet',
        date: '17 Jun 2022, 06:15 PM',
        amt: '400'
    }
]
