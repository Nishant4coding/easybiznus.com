'use client';
import React, { useState } from 'react'
import { Stack, Typography, Button } from '@mui/material';
import styles from './try.module.css';
import { IonIcon } from '@ionic/react';
import { newspaperOutline, home, add, businessOutline, radioButtonOnOutline, radioButtonOffOutline, storefrontOutline } from 'ionicons/icons';
import Card from '../CardH/Card';

const RightSide = () => {

    return (
        <Stack style={{ width: '45%', marginBottom: '100px', alignItems:'center'}} gap={3}>
            <Stack className={styles.leftboxes} gap={2}>

                {/* HEADING */}
                <Stack direction={"row"} style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #A0A0A0' }}>
                    <Typography className={styles.boxTitle} style={{ border: 'none' }}>
                        <IonIcon icon={newspaperOutline} className={styles.newsicon}></IonIcon>
                        1. Try and Buy
                    </Typography>
                    <Button variant="contained" className={styles.button} style={{ margin: "0", padding: '5px 23px', borderRadius: '6px' }}>
                        <IonIcon icon={add} className={styles.newsicon} style={{ fontSize: '18px' }}></IonIcon>
                        Add Product
                    </Button>
                </Stack>

                {/* PRODUCTS CARDS */}
                <Stack gap={2} style={{ width: '100%' }}>
                    {
                        cardArray.map((item, index) => (
                            <Card key={index} data={item} />
                        ))
                    }
                </Stack>

                {/* PRICING */}
                <Stack style={{marginTop:'10px'}}>
                    <Typography style={{fontWeight:500}}>Try & Buy Charges</Typography>
                    <Stack direction="row" style={{ justifyContent: 'space-between', padding: '20px', paddingBottom:'0' }}>
                        <Stack>
                            <Typography className={styles.billing}>Delivery Charges :</Typography>
                            <Typography className={styles.billing}>Total MRP :</Typography>
                            <Typography className={styles.billing}>Discount :</Typography>
                        </Stack>
                        <Stack>
                            <Typography className={styles.billing}>₹ 0.00</Typography>
                            <Typography className={styles.billing}>₹ 0.00</Typography>
                            <Typography className={styles.billing}>₹ 0.00</Typography>
                        </Stack>
                    </Stack>
                    <Stack style={{ alignItems: 'center', margin:'5px 0' }}>
                        <Typography style={{ width: '92%', border: '1px dashed #000' }}></Typography>
                    </Stack>
                    <Stack direction="row" style={{ justifyContent: 'space-between', padding: '20px', paddingTop:'0' }}>
                        <Stack>
                            <Typography className={styles.billing}>Current Total :</Typography>
                        </Stack>
                        <Stack>
                            <Typography className={styles.billing}>₹ 0.00</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            <Button variant='contained' className={styles.button} style={{width:'140px'}}>
                    CONFIRM
            </Button>
        </Stack>
    )
}

export default RightSide;

const cardArray = [
    {
        title: "Mercedes AMG Petronas F1, Wired Run Unisex Sneakers",
        color: "Warm White Inky-Blue",
        size: "8",
        sku_code: "99845_01",
        price: "₹15,990",
    },
    {
        title: "Mercedes AMG Petronas F1, Wired Run Unisex Sneakers",
        color: "Warm White Inky-Blue",
        size: "8",
        sku_code: "99845_01",
        price: "₹15,990",
    }
]