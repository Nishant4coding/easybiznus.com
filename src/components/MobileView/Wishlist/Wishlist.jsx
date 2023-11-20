"use client"
import React from 'react';
import CardB from '../../MobileViewCards/CardB/CardB';
import { Shoe1 } from '@/assets/svg/index';
import { Stack, Grid } from '@mui/material';
import Link from 'next/link';
import CustomButton from '../CustomBtn/CustomButton';

const Wishlist = () => {
    let wishListSize = 5;

    return (
        <Stack sx={{ marginTop: "55px", backgroundColor: "#EBEBEB" }}>
            <Grid container rowSpacing={1} spacing={2} justifyContent={"center"} marginTop={2} >
                {
                    cardArray.map((item, index) => (
                        <Grid item key={index}  >
                            <Link href={"/product"} >
                                <CardB data={item} wishIcon={false} />
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
            
            <CustomButton name={`ADD TO CART  [${wishListSize}]`} link={"checkout"}/>
           
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
];

export default Wishlist;