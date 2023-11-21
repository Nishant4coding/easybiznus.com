'use client'
import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import styles from './order.module.css';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';

const Help = () => {
    return (
        <Stack className={styles.helpbar} gap={1}>
            <Typography>Refundable Amount !</Typography>
            <Stack className={styles.returnbox}>
                <Typography style={{fontSize:'13px'}}>The Refundable amount will be credited to Shoemato wallet.</Typography>
                <Typography style={{fontSize:'14px', fontWeight:600}}>SHOEMATO WALLET</Typography>
                <IonIcon icon={chevronForwardOutline} className={styles.returnboxicon}></IonIcon>
            </Stack>
        </Stack>
    )
}

export default Help;