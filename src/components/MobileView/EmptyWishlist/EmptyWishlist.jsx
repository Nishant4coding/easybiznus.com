"use client"

import { Button, Stack, Typography, Grid } from '@mui/material';
import React from 'react';
import { EmptyBoxImg } from '@/assets/svg/index';
import Image from 'next/image';
import { Shoe1 } from '@/assets/svg/index';
import CardB from '../../MobileViewCards/CardB/CardB';
import Link from 'next/link';
import Header from '../CustomHeader/Header';


const EmptyWishlist = () => {
    return (
        <Stack>
            <Stack direction={"column"} alignItems={"center"} gap={2} sx={{marginTop:'40px', padding:'15px 0px' }}>
            <Header title={"Wishlist"} count={0}/>
                <Image src={EmptyBoxImg} alt='Empty box' />
                <Stack gap={5} alignItems={"center"}>
                    <Typography sx={{ fontSize: "18px", fontWeight: "600px" }}>Your Wishlist is Empty</Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: "600px" }}>YOU MAY ALSO LIKE</Typography>
                </Stack>
            </Stack>

            <Stack sx={{ backgroundColor: "#EBEBEB" }}>
                <Grid container rowSpacing={1} spacing={2} justifyContent={"center"} marginTop={2} >
                    {
                        cardArray.map((item, index) => (
                            <Grid item key={index}  >
                                <Link href={"/product"} >
                                    <CardB data={item} wishIcon={true} />
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Stack>
        </Stack>
    )
}

const cardArray = [
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'PAPARIKA',
        style: 'ZOOMSTER 350',
        sp: '₹15,990',
        mrp: '₹3,499',
        link: '/product'
    },
];

export default EmptyWishlist;