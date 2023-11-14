"use client"
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './card.module.css'

const TrendingCard = ({ img, title }) => {
    return (
        <Stack>
            <Stack className={styles.prodImg}>
                <Image src={img} alt='shoe' />
            </Stack>
            <Stack className={styles.prodTitle}>
                <Typography className={styles.prodTitleTxt}>
                    {title}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default TrendingCard;