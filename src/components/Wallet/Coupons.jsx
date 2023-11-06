'use client';
import React, { useState } from 'react'
import { Stack, Typography, Button } from '@mui/material';
import styles from './wallet.module.css';
import { IonIcon } from '@ionic/react';
import { newspaperOutline, home, arrowForwardOutline, businessOutline, storefrontOutline } from 'ionicons/icons';
import Link from 'next/link';
const Coupons = () => {
    const [select, setSelect] = useState();

    return (
        <Stack className={styles.couponcontainer} gap={2}>
            <Stack direction={"row"} className={styles.box}>
                <Typography className={styles.boxTitle} style={{ border: 'none' }}>
                    <IonIcon icon={newspaperOutline} className={styles.newsicon}></IonIcon>
                    COUPONS AND GIFTS
                </Typography>
            </Stack>
            <Stack gap={1} direction={"column"} style={{ marginBottom: '10px', alignItems: 'flex-end',}}>
                {
                    boxArray.map((item, index) => (
                        <Link href="#" key={item.title} onClick={() => setSelect(index)} style={{width:'100%'}}>
                            <Box data={item} select={select === index} />
                        </Link>
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default Coupons;

const Box = ({ data, select }) => {
    const { icon, title, subtitile } = data;
    return (
        <Stack gap={2} style={{ border: '1px solid #B5B5B5', borderRadius: '8px', alignItems: 'center', padding: '4px 10px', cursor: "pointer", width: '100%', position: 'relative' }} direction={"row"}>
            <IonIcon icon={icon} className={styles.newsicon}></IonIcon>
            <Typography style={{ fontSize: '13px' }}>
                {title}
                <Typography style={{ fontSize: '12px', color:'#A0A0A0' }}>
                    {subtitile}
                </Typography>
            </Typography>
            <IonIcon icon={arrowForwardOutline} style={{position:'absolute', right:'10px'}}></IonIcon>
        </Stack>
    )
}

const boxArray = [
    {
        icon: home,
        title: 'Add Coupons',
        subtitile: 'Get some exclusive Benefits',
    },
    {
        icon: businessOutline,
        title: 'Transaction History',
        subtitile: 'All your Previous Transaction',
    },
    {
        icon: storefrontOutline,
        title: 'Help and Support',
        subtitile: 'Get help',
    }
]
