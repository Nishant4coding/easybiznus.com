"use client"
import { Stack, Typography } from '@mui/material';
import React from 'react';
import styles from './trending.module.css';
import TrendingCard from './TrendingCard';
import { Shoe5 } from '../../../assets/svg/index';

const Trending = () => {
    const prod = [
        {
            img: Shoe5,
            title: "Air Jordan XXXVI"
        },
        {
            img: Shoe5,
            title: "Air Jordan XXXVI"
        },
      
    ]
    return (
        <Stack className={styles.trending}>
            <Typography className={styles.heading} variant="h6" component="h6">
                Trending
            </Typography>
            <Stack className={styles.products} >
                {
                    prod.map((item, ind) => {
                        return (
                            <TrendingCard img={item.img} title={item.title} key={ind} />
                        )
                    })
                }
            </Stack>
        </Stack>
    )
}

export default Trending;