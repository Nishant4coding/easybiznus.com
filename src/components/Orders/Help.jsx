'use client'
import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import styles from './order.module.css';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
const Help = () => {
    return (
        <Stack className={styles.helpbar} gap={1}>
            <Typography>Need help with your Item?</Typography>
            <Stack className={styles.returnbox}>
                <Typography style={{fontSize:'14px', fontWeight:600}}>Return Items</Typography>
                <Typography style={{fontSize:'13px'}}>Eligible till 20 November 2023</Typography>
                <IonIcon icon={chevronForwardOutline} className={styles.returnboxicon}></IonIcon>
            </Stack>
        </Stack>
    )
}

export default Help;