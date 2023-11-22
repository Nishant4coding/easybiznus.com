'use client';
import { ArrowForwardCircle, GreenTick, Shoe7 } from '@/assets/svg';
import { Search, FilterBox } from '@/styled/Search2'
import { Stack, Box, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Order = () => {
    return (
        <Stack sx={{ width: '100%' }} gap={5}>
            <Stack direction={'row'} sx={{ justifyContent: "space-between" }}>
                <Search width="60%" />
                <FilterBox width="30%" />
            </Stack>

            <Stack sx={{ alignItems: 'center' }} gap={1}>
                {
                    cardArray.map((item, index) => (
                            <Card data={item} key={index}/>
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default Order;


const Card = ({ data }) => {
    const {
        id,
        title,
        price,
        stat
    } = data;

    return (
        <Link href={`/orders/details/${id}`} style={{maxWidth: '370px', minWidth: '270px', width: '90%' }}>
        <Stack gap={1} direction={"row"} sx={{ boxShadow: '0 4px 12px 0 rgb(0,0,0, 0.1)', borderRadius: '10px', padding: '10px', justifyContent:'space-between'}}>
            <Stack>
                <Stack gap={0}>
                    <Typography sx={{ fontSize: '10px' }}>Order ID: {id}</Typography>
                    <Stack direction={"row"} sx={{ width: 'fit-content' }} gap={2}>
                        <Typography sx={{ fontSize: '15px' }}>{title}</Typography>
                        <Typography sx={{ fontWeight: '600', color: '#BA2B20' }}>{price}</Typography>
                    </Stack>
                </Stack>
                <Typography sx={{ fontSize: '14px', color: "#1BCFB4", fontWeight: '600', display: 'flex', alignItems: "center", gap: '5px', }}>
                    {stat}
                    {stat === 'Delivered' && <Image src={GreenTick} alt="ico" style={{ width: '15px', height: 'auto' }} />}
                </Typography>
                <Typography sx={{ fontSize: '15px', display: 'flex', alignItems: "center", gap: '5px', fontWeight: '500', }}>
                    Review
                    <Image src={ArrowForwardCircle} alt="ico" style={{ width: '18px', height: 'auto' }} />
                </Typography>
            </Stack>
            <Box sx={{ width: '70px', height: '70px' }}>
                <Image alt="product" src={Shoe7} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
        </Stack>
        </Link>
    )
}

const cardArray = [
    {
        id: '123456712323456',
        title: 'Nike Superfly 6 Club',
        price: '₹3,499',
        stat: 'On the Way'
    },
    {
        id: '123456712323456',
        title: 'Nike Superfly 6 Club',
        price: '₹3,499',
        stat: 'Delivered'
    },
    ,
    {
        id: '123456712323456',
        title: 'Nike Superfly 6 Club',
        price: '₹3,499',
        stat: 'Delivered'
    },
    ,
    {
        id: '123456712323456',
        title: 'Nike Superfly 6 Club',
        price: '₹3,499',
        stat: 'Delivered'
    }
]
