import React from 'react';
import { Stack, Typography } from '@mui/material';
import styles from './try.module.css'
import Card from '../CardG/Card';
import { IonIcon } from '@ionic/react';
import { helpCircleOutline } from 'ionicons/icons';

const TrialContainer = () => {
    return (
        <Stack style={{ width: '82%', alignItems: 'center' }}>
            <Typography className={styles.heading}>All Trials
                <Typography style={{ fontSize: '12px', display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '25px' }}>
                    <IonIcon icon={helpCircleOutline} style={{ fontSize: "18px" }}></IonIcon>
                    Need help?
                </Typography>
            </Typography>
            <Stack gap={2} style={{ width: 'fit-content' }}>
                {
                    cardArray.map((item, index) => (
                        <Card key={index} data={item} />
                    ))
                }
            </Stack>
        </Stack >
    )
}

export default TrialContainer;

const cardArray = [
    {
        title: 'Nike Kiger 9',
        color: 'Orange',
        size: '9',
        seller: 'REDTAPELIMITED',
        price: '₹ 12,795',
        date: '12-04-2023 2:30 pm'
    },
    {
        title: 'Nike Kiger 9',
        color: 'Orange',
        size: '9',
        seller: 'REDTAPELIMITED',
        price: '₹ 12,795',
        date: '12-04-2023 2:30 pm'
    },
    {
        title: 'Nike Kiger 9',
        color: 'Orange',
        size: '9',
        seller: 'REDTAPELIMITED',
        price: '₹ 12,795',
        date: '12-04-2023 2:30 pm'
    },
    {
        title: 'Nike Kiger 9',
        color: 'Orange',
        size: '9',
        seller: 'REDTAPELIMITED',
        price: '₹ 12,795',
        date: '12-04-2023 2:30 pm'
    },
    {
        title: 'Nike Kiger 9',
        color: 'Orange',
        size: '9',
        seller: 'REDTAPELIMITED',
        price: '₹ 12,795',
        date: '12-04-2023 2:30 pm'
    },
]
