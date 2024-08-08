'use client';
import React, { useEffect, useState } from 'react'
import { Stack, Typography, Button } from '@mui/material';
import styles from './checkout.module.css';
import { IonIcon } from '@ionic/react';
import { newspaperOutline, home, add, businessOutline, radioButtonOnOutline, radioButtonOffOutline, storefrontOutline } from 'ionicons/icons';
import Card from '../CardH/Card';
import { getCart } from "@/Redux/Features/cart/cartSlice";
import { useDispatch, useSelector } from 'react-redux';


const RightSide = () => {
    const dispatch = useDispatch();

    const getCartState = useSelector((state) => state.cart.cart);
    const [cartStates, setCartState] = useState(getCartState);
  
    useEffect(() => {
      dispatch(getCart());
    }, [dispatch]);
  
    useEffect(() => {
      setCartState(getCartState);
    }, [getCartState]);

    const total=getCartState.items.map(ele=>{
        return parseFloat(ele.salePrice)
      }).reduce((partialSum, a) => partialSum+a,0);

    return (
        <Stack style={{ width: '45%', marginBottom: '100px', alignItems:'center'}} gap={3}>
            <Stack className={styles.leftboxes} gap={2}>

                {/* HEADING */}
                <Stack direction={"row"} style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #A0A0A0' }}>
                    <Typography className={styles.boxTitle} style={{ border: 'none', letterSpacing:'0px' }}>
                        <IonIcon icon={newspaperOutline} className={styles.newsicon}></IonIcon>
                        ORDER DETAILS
                    </Typography>
                    <Button variant="contained" className={styles.button} style={{ margin: "0", padding: '5px 23px', borderRadius: '6px' }}>
                        <IonIcon icon={add} className={styles.newsicon} style={{ fontSize: '18px' }}></IonIcon>
                        Add Product
                    </Button>
                </Stack>

                {/* PRODUCTS CARDS */}
                <Stack gap={2} style={{ width: '100%' }}>
                    {
                        getCartState.items.map((item, index) => (
                            <Card key={index} data={item} />
                        ))
                    }
                </Stack>

                {/* PRICING */}
                <Stack style={{marginTop:'10px', padding:'0 50px'}}>
                    <Stack direction="row" style={{ justifyContent: 'space-between', padding: '20px', paddingBottom:'0' }}>
                        <Stack>
                            <Typography className={styles.billing}>Subtotal</Typography>
                            <Typography className={styles.billing}>Wallet</Typography>
                            <Typography className={styles.billing}>Delivery</Typography>
                        </Stack>
                        <Stack>
                            <Typography className={styles.billing}>₹ {total}</Typography>
                            <Typography className={styles.billing}>₹ -1000</Typography>
                            <Typography className={styles.billing}>₹ 40</Typography>
                        </Stack>
                    </Stack>
                    <Stack style={{ alignItems: 'center', margin:'5px 0' }}>
                        <Typography style={{ width: '92%', borderTop: '1px solid #0D1A26' }}></Typography>
                    </Stack>
                    <Stack direction="row" style={{ justifyContent: 'space-between', padding: '20px', paddingTop:'0' }}>
                        <Stack>
                            <Typography className={styles.billing} style={{color:'#0D1A26', fontWeight:'700'}}>Grand Total :</Typography>
                        </Stack>
                        <Stack>
                            <Typography className={styles.billing} style={{color:'#0D1A26', fontWeight:'700'}}>₹ {total-1000+40}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
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