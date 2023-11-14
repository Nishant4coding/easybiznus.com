"use client"
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './cardA.module.css';
import { BlueCircle, GreenCircle, Wishlist } from '@/assets/svg/index';

const CardA = ({ img, title }) => {
    return (
        <Stack>

            <Stack className={styles.prodImg}>
                <Stack className={styles.wishlist}>
                    <Image src={Wishlist} alt='Wishlist' width={24} height={24} />
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