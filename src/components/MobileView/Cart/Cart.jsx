"use client"
import { Stack, Typography, Button } from '@mui/material'
import React, { useState } from 'react';
import Image from 'next/image';
import { AddIcon, Shoe6, DeleteIconRed } from '@/assets/svg/index';
import { IonIcon } from '@ionic/react';
import { heart, heartOutline, } from 'ionicons/icons';
import styles from './cart.module.css'
import CustomButton from '../CustomBtn/CustomButton';

const Cart = () => {
    const [wish, setWish] = useState(false);

    let quantity = 1;

    return (
        <Stack sx={{ marginTop: "55px" }}>
            <Stack padding={3} direction={"row"} gap={2}>
                <Stack alignItems={"center"}>
                    <Image src={Shoe6} alt='shoe' width={82} height={82} />
                    <Stack direction={"row"} gap={2} >
                        <Image src={AddIcon} alt='icon' />
                        <Typography>{quantity}</Typography>
                        <Image src={AddIcon} alt='icon' />
                    </Stack>
                </Stack>

                <Stack sx={{ width: "175px" }}>
                    <Typography className={styles.title} >Mercedes AMG Petronas F1 ,Wired Run Unisex Sneakers</Typography>
                    <Typography className={styles.subTitle}>Men’s Shoes</Typography>
                    <Typography className={styles.subTitle}>Puma White-Silver</Typography>
                    <Typography className={styles.subTitle}>
                        SIze 11
                    </Typography>
                </Stack>
                <Stack gap={2}>
                    <Stack direction={"row"} gap={1}>
                        <IonIcon icon={wish ? heart : heartOutline} size="large" style={{ color: "#F55E53", cursor: "pointer" }}
                            onClick={() => {
                                setWish(!wish);
                                // wish?null: addedToWishlist();
                            }}
                        ></IonIcon>
                        <Image src={DeleteIconRed} style={{ color: "red" }} />
                    </Stack>

                    <Stack >
                        <Typography className={styles.totalPrice}> ₹3,499</Typography>
                        <Typography className={styles.subtxt}>Incl. of taxes</Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Stack gap={2} paddingX={1}  >
                <Stack className={styles.subTotal} paddingX={1} borderTop={"1px solid #9E9898"}>
                    <Typography>Subtotal</Typography>
                    <Typography>₹ 3,499</Typography>
                </Stack>
                <Stack className={styles.subTotal} paddingX={1} borderBottom={"1px solid black"}>
                    <Typography>Delivery</Typography>
                    <Typography>₹ 40</Typography>
                </Stack>

            </Stack>
            <Stack className={styles.grandTotal} paddingX={1} >
                <Typography>Grand Total</Typography>
                <Typography>₹ 3539</Typography>
            </Stack>

           <CustomButton name={"CHECKOUT"} link={"/checkout"}/>
        </Stack>
    )
}

export default Cart;