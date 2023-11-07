import React from 'react'
import { Stack, Box, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './wallet.module.css';
import Search from '@/styled/Search';
import { Renew } from '@/assets/svg';
import TxnCard from './TxnCard';
import { Img1 } from '@/assets/svg';

const TransactionTable = () => {
    return (
        <Stack direction={"column"} className={styles.table}>
            <TransactionHeader />
            {cardArray.map((item,index)=>(<TxnCard data={item} key={index}/>))}
        </Stack>
    )
}

export default TransactionTable;


const TransactionHeader = () => {
    return (
        <Stack direction="row" gap={2} sx={{marginBottom:"30px"}}>
            <Stack direction="row" className={styles.tablehead} gap={0.5}>
                <Typography style={{ borderRadius: '10px 0 0 0', marginLeft:'-1px' }} className={styles.selectedhead} >{headArray[0]}</Typography>
                {
                    headArray.slice(1, -1).map((item) => (
                        <Typography className={styles.tableheading} key={item}>{item}</Typography>
                    ))
                }
                <Typography style={{ borderRadius: '0 10px 10px 0' }} className={styles.tableheading} >{headArray[headArray.length - 1]}</Typography>
            </Stack>
            <Search width={"250px"} />
            <Box style={{ marginTop: '8px', cursor: 'pointer', padding: "5px", boxShadow: "0 0 7px 0px #d9d9d9", borderRadius: "100%", height: 'fit-content' }}>
                <Image src={Renew} alt="renew" width={30} />
            </Box>
        </Stack>
    )
}

const headArray = [
    "All",
    "Refunds",
    "Cashback"
]

const cardArray = [
    {
        img: Img1,
        subtitle: 'Shoemato Wallet Balance',
        title: 'Paid On Shoemato',
        date: '05 August 2023, 10:44 AM',
        amt: '-₹ 500'
    },
    {
        img: Img1,
        subtitle: 'Shoemato Wallet Balance',
        title: 'Paid On Shoemato',
        date: '05 August 2023, 10:44 AM',
        amt: '-₹ 500'
    },
    {
        img: Img1,
        subtitle: 'Shoemato Wallet Balance',
        title: 'Paid On Shoemato',
        date: '05 August 2023, 10:44 AM',
        amt: '-₹ 500'
    },
    {
        img: Img1,
        subtitle: 'Shoemato Wallet Balance',
        title: 'Paid On Shoemato',
        date: '05 August 2023, 10:44 AM',
        amt: '-₹ 500'
    },
    {
        img: Img1,
        subtitle: 'Shoemato Wallet Balance',
        title: 'Paid On Shoemato',
        date: '05 August 2023, 10:44 AM',
        amt: '-₹ 500'
    }
]