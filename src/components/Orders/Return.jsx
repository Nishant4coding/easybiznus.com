import React from 'react'
import { Stack, Typography } from '@mui/material';
import styles from './order.module.css';
import { IonIcon } from '@ionic/react';
import { layersOutline, caretForwardOutline } from 'ionicons/icons';

const Return = () => {
    return (
        <Stack gap={1}>
            <Typography style={{ fontSize: '22px', margin: '20px 0' }}>I want to Return Because</Typography>
            {
                returnArray.map((item) => (
                    <Stack gap={2} key={item} direction={"row"} className={styles.returnOptions}>
                        <IonIcon icon={layersOutline} style={{ fontSize: '20px' }}></IonIcon>
                        <Typography>{item}</Typography>
                        <IonIcon icon={caretForwardOutline} style={{ position: 'absolute', right: '10px', top: '38%', fontSize: '10px' }}></IonIcon>
                    </Stack>
                ))
            }
            <Typography style={{marginTop:'40px'}}>Comments(optional):</Typography>
            <textarea gap={2} direction={"row"} className={styles.returnOptions} style={{cursor:'text', height:'150px',resize:'none'}}>

            </textarea>
        </Stack>
    )
}

export default Return;

const returnArray = [
    "Found at Cheaper Price",
    "Defective",
    "My reasons not listed"
]
