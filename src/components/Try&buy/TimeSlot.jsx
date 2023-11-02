'use client'
import React from 'react'
import { Stack, Typography } from '@mui/material';
import styles from './try.module.css';
import { IonIcon } from '@ionic/react';
import { newspaperOutline, home } from 'ionicons/icons';
const TimeSlot = () => {
    return (
        <Stack className={styles.leftboxes} gap={2}>
            <Typography className={styles.boxTitle}>
                <IonIcon icon={newspaperOutline} className={styles.newsicon}></IonIcon>
                Choose Time Slot
            </Typography>
            <Stack gap={1} direction={"row"} style={{marginBottom:'70px'}}>
                {
                    boxArray.map((item) => (
                        <Box key={item} />
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default TimeSlot;

const Box = () => {
    return (
        <Stack gap={1} direction={"row"} style={{ border: '1px solid #B5B5B5', borderRadius: '8px', alignItems: 'center', padding:'10px', cursor:"pointer" }}>
            <IonIcon icon={home} ></IonIcon>
            <Typography style={{fontSize:'13px'}}>
                12-June-2023
                <Typography style={{ color: '#B5B5B5', fontSize: '10px' }}>6 am - 8 pm</Typography>
            </Typography>
        </Stack>
    )
}

const boxArray = [1, 2, 3, 4];
