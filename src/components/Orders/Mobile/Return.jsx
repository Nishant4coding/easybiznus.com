'use client'
import { Stack, Typography } from '@mui/material';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import styles from '../order.module.css';
import {Card, Option} from './Details';

const Details = () => {
    return (
        <Stack sx={{ width: '100%', alignItems: 'center' }} gap={2}>
            <Typography sx={{ textAlign: 'center', color: '#B5B5B5', fontWeight: '600' }}>OrderID</Typography>
            <Card />
            <Stack sx={{ width: '100%', marginTop: '50px' }} gap={0.7}>
                <Typography>I want to Return Because</Typography>
                <Option title="Found at Cheaper Price" path="#" />
                <Option title="Defective" path="#" />
                <Option title="My Reason not Listed" path="#" />
            </Stack>

            <Stack sx={{ width: '100%' }}>
                <Typography>Comments(Optional):</Typography>
                <textarea gap={2} direction={"row"} className={styles.returnOptions} style={{ cursor: 'text', height: '150px', resize: 'none' }}>

                </textarea>
            </Stack>

            <Stack gap={1} sx={{width:'100%', marginBottom:'60px'}}>
                <Typography>Refundable Amount !</Typography>
                <Stack className={styles.returnbox} style={{width:'100%'}}>
                    <Typography style={{ fontSize: '10px', width:'95%' }}>The Refundable amount will be credited to Shoemato wallet.</Typography>
                    <Typography style={{ fontSize: '10px', fontWeight: 600 }}>SHOEMATO WALLET</Typography>
                    <IonIcon icon={chevronForwardOutline} className={styles.returnboxicon}></IonIcon>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Details;
