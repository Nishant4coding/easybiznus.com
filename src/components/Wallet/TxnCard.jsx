'use client';
import React from 'react'
import { Stack, Box, Typography } from '@mui/material';
import styles from './wallet.module.css';
import Image from 'next/image';
import { IonIcon } from '@ionic/react';
import { caretDownOutline } from 'ionicons/icons';


const TxnCard = ({ data }) => {
    const { img, title, subtitle, date, amt } = data;
    return (
        <Stack direction={"row"} className={styles.card} gap={2} sx={{ position: 'relative' }}>
            <Box sx={{ width: "60px", height: '60px' }}>
                <Image alt="product-img" src={img} style={{ objectFit: "cover", height: '100%', width: '100%' }} />
            </Box>
            <Stack>
                <Typography>{title}</Typography>
                <Typography sx={{ fontSize: '11px' }}>{subtitle}</Typography>
                <Typography sx={{ fontSize: '12px' }}>{date}</Typography>
            </Stack>
            <Box sx={{ position: 'absolute', right: '60px', height: '100%', paddingTop: '10px' }}>
                <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>{amt}</Typography>
            </Box>
            <IonIcon icon={caretDownOutline} style={{ position: 'absolute', right: '10px' }}></IonIcon>
        </Stack>
    )
}

export default TxnCard
