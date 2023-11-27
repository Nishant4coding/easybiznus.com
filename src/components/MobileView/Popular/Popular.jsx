"use client"
import { Stack, Typography } from '@mui/material';
import React from 'react';
import styles from './popular.module.css';
import { Shoe5 } from '../../../assets/svg/index';
import CardA from '@/components/MobileViewCards/CardA/CardA';
import Link from 'next/link';

const Popular = () => {
    const prod = [
        {
            img: Shoe5,
            title: "Air Jordan XXXVI"
        },
        {
            img: Shoe5,
            title: "Air Jordan XXXVI"
        },
        {
            img: Shoe5,
            title: "Air Jordan XXXVI"
        },
        {
            img: Shoe5,
            title: "Air Jordan XXXVI"
        },
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
        <Stack className={styles.container}>
            <Typography className={styles.heading} variant="h6" component="h6">
                Popular among Men
            </Typography>
            <Stack className={styles.products}>
                {
                    prod?.map((item, ind) => {
                        return (
                            <Link href={"/category"} key={ind}>
                                <CardA img={item?.img} title={item?.title}/>
                            </Link>
                        )
                    })
                }
            </Stack>
        </Stack>
    )
}

export default Popular;