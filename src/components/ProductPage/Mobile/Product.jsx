import { Stack, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import styles from '@/components/ProductPage/product.module.css';
import { IonIcon } from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';

const Product = () => {
    const [wish, setWish]=useState(false);
    const handleSetWish=()=>setWish(!wish)

    return (
        <Box sx={{ padding: '10px 20px' }}>
            <Stack direction={"row"} sx={{ justifyContent: 'space-evenly' }}>
                <Typography className={styles.heading} style={{ fontSize: '22px', width: 'fit-content' }}>Mercedes AMG Petronas F1 Wired Run Unisex Sneakers</Typography>
                {
                    wish ?
                        <IonIcon icon={heartOutline} style={{ color: '#F55E53', fontSize: '65px' }} onClick={handleSetWish}></IonIcon> :
                        <IonIcon icon={heart} style={{ color: '#F55E53', fontSize: '65px' }} onClick={handleSetWish}></IonIcon>
                }
            </Stack>
            <Stack direction={"row"}>
                <Stack gap={0.3}>
                    <Typography className={styles.sp2}>₹3,499</Typography>
                    <Typography className={styles.mrp2}>₹6,999</Typography>
                    <Typography style={{fontSize:'15px', color:'#6C6C6C'}}>Prices include GST</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Product
