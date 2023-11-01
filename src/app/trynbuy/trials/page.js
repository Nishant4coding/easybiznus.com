'use client'
import React from 'react'
import BasicBreadcrumbs from '@/components/BreadCrumbs';
import Filter from '@/components/Filter/Filter';
import { Stack, Typography } from '@mui/material';
import Container from '@/components/Try&buy/Container';
import Summary from '@/components/Orders/OrderSummary';
import { IonIcon } from '@ionic/react';
import { helpCircleOutline } from 'ionicons/icons';
import Button from '@/components/Try&buy/Button';
import TrialContainer from '@/components/Try&buy/TrialContainer';
import Footer from '@/components/Footer/Footer';

const page = () => {
    return (
        <>
            <BasicBreadcrumbs inactive={inactive} active={"Trials"} fsize={"20px"} mt={"15px"} />
            <Filter filterArray={filterArray} sort={false} />
            <Stack direction={"row"} style={{ justifyContent: 'space-around', padding: '0px 70px', marginBottom:'100px', }}>
                <TrialContainer/>
            </Stack>
            <Footer/>
        </>
    )
}

export default page;

const inactive = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'TryAndBuy',
        path: '/trynbuy'
    }
];

const filterArray = [
    {
        title: "On the way"
    },
]
