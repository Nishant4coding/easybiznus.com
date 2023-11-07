"use client";
import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import styles from './wallet.module.css';
import { IonIcon } from '@ionic/react';
import { closeCircleOutline } from 'ionicons/icons';

const AddCard = () => {
    return (
        <Stack className={styles.addcard} direction={"column"}>
                <Typography className={styles.boxheading}>Add money to wallet</Typography>
                <Stack direction={"row"} className={styles.inputBox} gap={3}>
                    <Box className={styles.inputcontainer}>
                    <input type="text" placeholder='₹100' className={styles.input} />
                    <IonIcon icon={closeCircleOutline} className={styles.closeicon}></IonIcon>
                    </Box>
                    <Button variant="contained" style={{width:"30%",}} className={styles.button}> Procedd to Add</Button>
                </Stack>
                <Stack direction={"row"} gap={2}>
                    {
                        priceArray.map((item,index)=>(
                            <Box key={index} className={styles.pricebox}>
                                {item}
                            </Box>
                        ))
                    }
                </Stack>
        </Stack>
    )
}

export default AddCard;

const priceArray = [
    "+₹100",
    "+₹200",
    "+₹400",
    "+₹800"
]
