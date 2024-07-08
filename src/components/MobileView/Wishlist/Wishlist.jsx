"use client"
import React, { useEffect } from 'react';
import CardB from '../../MobileViewCards/CardB/CardB';
import { useDispatch, useSelector } from 'react-redux';

import { Shoe1 } from '@/assets/svg/index';
import { Stack, Grid, Button } from '@mui/material';
import Link from 'next/link';
import CustomButton from '../CustomBtn/CustomButton';
import Header from '../CustomHeader/Header';
import { fetchWishlist, removeFromWishlist } from '@/Redux/Features/wishlist/wishlistSlice';    
import global from '@/global.module.css';

const Wishlist = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.user.id);
    const wishlistItems = useSelector(state => state.wishlist.items);
    const loading = useSelector(state => state.wishlist.loading);
    const error = useSelector(state => state.wishlist.error);

    useEffect(() => {
        // Fetch wishlist on component mount
        dispatch(fetchWishlist());
    }, [dispatch]);

    const handleRemoveFromWishlist = (productId) => {
        dispatch(removeFromWishlist({ productId }));
    };

    return (
        <Stack sx={{ alignItems: 'center', marginTop: "55px", backgroundColor: '#fff', minHeight: '92vh', position: 'relative' }}>
            <Header title={"Wishlist"} count={cardArray.length} />
            <Grid container rowSpacing={1} spacing={2} justifyContent={"center"} marginTop={2} sx={{ backgroundColor: "#EBEBEB", marginBottom: '40px' }}>
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

            <Button variant="contained" className={global.button} style={{ width: '80%', marginBottom: '30px', fontSize: '15px' }}>
                <Link href="/checkout" style={{ width: '100%' }}>
                    {`ADD TO CART  [${cardArray.length}]`}
                </Link>
            </Button>

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
    }
];

export default Wishlist;