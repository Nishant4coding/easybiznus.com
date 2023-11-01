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

const page = () => {
    return (
        <>
            <BasicBreadcrumbs inactive={inactive} active={"Bag"} fsize={"20px"} mt={"15px"} />
            <Filter filterArray={filterArray} sort={false} />
            <Stack direction={"row"} style={{ justifyContent: 'space-around', padding: '0px 70px' }}>
                <Container />
                <Stack style={{ width: '20%', alignItems: 'center', paddingTop: '20px' }}>
                    <Typography style={{ fontSize: '12px', display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '25px' }}>
                        <IonIcon icon={helpCircleOutline} style={{ fontSize: "18px" }}></IonIcon>
                        Need help?
                    </Typography>
                    <Summary width={"100%"} />
                    <Button />
                </Stack>
            </Stack>
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
