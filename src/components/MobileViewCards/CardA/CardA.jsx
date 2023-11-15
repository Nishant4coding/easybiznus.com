"use client"
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './cardA.module.css';
import { BlueCircle, GreenCircle } from '@/assets/svg/index';
import {  heart, heartOutline,  } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useState } from "react";

const CardA = ({ img, title }) => {
    const [wish, setWish] = useState(false);
    return (
        <Stack className={styles.cardCon}>
            <Stack className={styles.prodImg}>
                <Stack className={styles.wishlist}>

                    <IonIcon icon={wish ? heart : heartOutline} size="large" style={{ color: "#F55E53", cursor: "pointer" }}
                    onClick={() =>{ 
                        setWish(!wish); 
                        // wish?null: addedToWishlist();
                    }}
                ></IonIcon>
                </Stack>
                <Image src={img} alt='shoe' />
            </Stack>

            <Stack className={styles.prodTitle}>
                <Typography className={styles.prodTitleTxt}>
                    {title}
                </Typography>
                <Stack className={styles.buttomSec}>
                    <Stack direction={"row"} gap={1} marginLeft={0.5}>
                    <Image src={GreenCircle} width={15} height={15} alt='green circle' />
                    <Image src={BlueCircle} width={15} height={15} alt='blue circle'/>
                    </Stack>
                    <Typography color={"#BA2B20"} marginRight={1}>
                        ₹3,499
                    </Typography>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default CardA;