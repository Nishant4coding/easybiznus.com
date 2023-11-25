"use client"
import { Shoe5 } from '@/assets/svg/index';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import CardA from '@/components/MobileViewCards/CardA/CardA';
import styles from './kidsCollections.module.css';
import Link from 'next/link';

const KidsCollections = () => {
    const prod = [
        {
            img: Shoe5,
            title: "Air Jordan XXXVI",
            link: "/productView"
        },
        {
            img: Shoe5,
            title: "Air Jordan XXXVI",
            link: "/productView"
        },
        {
            img: Shoe5,
            title: "Air Jordan XXXVI",
            link: "/productView"
        },
        {
            img: Shoe5,
            title: "Air Jordan XXXVI",
            link: "/productView"
        },
        {
            img: Shoe5,
            title: "Air Jordan XXXVI",
            link: "/productView"
        },
        {
            img: Shoe5,
            title: "Air Jordan XXXVI",
            link: "/productView"
        },

    ]

    return (
        <Stack>
            <Stack direction={"row"} sx={{ backgroundColor: "white" }} marginTop={6} height={101}>
                <Stack justifyContent={"center"} marginLeft={2}>
                    <Typography variant='h5'>KID'S </Typography>
                    <Typography variant='h5'> COLLECTIONS</Typography>
                </Stack>
                <Image src={Shoe5} alt='shoe' width={150} height={100} />
            </Stack>

            <Stack sx={{ backgroundColor: "#E4BBFFFC" }}>
                <Stack sx={{ backgroundColor: "#ECD4FC", paddingY: 1, width:'100%' }} justifyContent={"center"} alignItems={"center"}>
                    <Typography variant='h5' color={"white"}>TOP BRANDS</Typography>
                </Stack>
                <Stack className={styles.products}>
                    {
                        prod?.map((item, ind) => {
                            return (
                                <Link href={"/category"} key={ind}>
                                    <CardA img={item?.img} title={item?.title} link={item?.link} />
                                </Link>
                            )
                        })
                    }
                </Stack>
            </Stack>
            <Stack sx={{ backgroundColor: "#E4BBFFFC" }}>
                <Stack sx={{ backgroundColor: "#ECD4FC", paddingY: 1 }} justifyContent={"center"} alignItems={"center"}>
                    <Typography variant='h5' color={"white"}>TRENDING</Typography>
                </Stack>
                <Stack className={styles.products}>
                    {
                        prod?.map((item, ind) => {
                            return (
                                <Link href={"/category"} key={ind}>
                                    <CardA img={item?.img} title={item?.title} />
                                </Link>
                            )
                        })
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}

export default KidsCollections;
