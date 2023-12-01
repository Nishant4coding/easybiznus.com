'use client'
import { Box, Stack, Typography } from '@mui/material';
import { GreenTick, Shoe7 } from '@/assets/svg';
import Image from 'next/image';
import { IonIcon } from '@ionic/react';
import { star, starOutline, caretForward, layersOutline } from 'ionicons/icons';
import { useState } from 'react';
import VerticalLinearStepper from '../Stepper';
import Link from 'next/link';


const Details = ({id}) => {
    return (
        <Stack sx={{ width: '100%', alignItems: 'center' }} gap={2}>
            <Typography sx={{ textAlign: 'center', color: '#B5B5B5', fontWeight: '600' }}>OrderID</Typography>
            <Card />
            <Stack sx={{ alignSelf: 'start', marginLeft: '15px' }}>
                <VerticalLinearStepper title={false} steps={steps} />
            </Stack>
            <Stack sx={{ width:'100%', marginTop:'50px'}} gap={0.7}>
                <Option title="Write a Review" path="#" />
                <Option title="Invoice Download" path="#" />
                <Option title="Return" path={`/orders/return/${id}`} />
            </Stack>
        </Stack>
    )
}

export default Details;



export const Card = () => {
    const [Star, setStar] = useState([
        1, 1, 0, 0, 0
    ]);

    const handleStar = (index) => {
        const newStar = [...Star];
        for (let i = 0; i < 5; i++) {
            newStar[i] = i <= index ? 1 : 0;
        }
        setStar(newStar);
    }

    return (
        <Stack direction={"row"} sx={{ width: '90%', borderRadius: '10px', boxShadow: '0 4px 12px 0 rgb(0,0,0, 0.2)', padding: '10px 20px', justifyContent: 'space-between' }}>
            <Stack>
                <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Nike Air Max Plus</Typography>
                <Typography sx={{ fontSize: '10px', color: '#B5B5B5' }}>Size: 11 Color: Green</Typography>
                <Typography sx={{ fontSize: '13px', fontWeight: '700', color: '#BA2B20' }}>₹3,499</Typography>
                <Typography sx={{ fontSize: '14px', color: "#1BCFB4", fontWeight: '500', display: 'flex', alignItems: "center", gap: '5px', }}>
                    {"Delivered"}
                    {true && <Image src={GreenTick} alt="ico" style={{ width: '15px', height: 'auto' }} />}
                </Typography>
                <Stack direction={"row"} gap={2} sx={{ alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '15px' }}>Rate: </Typography>
                    <Stack direction={"row"} gap={0.2}>
                        {
                            Star.map((item, index) => (
                                <IonIcon key={index} onClick={() => handleStar(index)} icon={item > 0 ? star : starOutline} style={{ color: "#F9D144", fontSize: '15px' }} />
                            ))
                        }
                    </Stack>
                </Stack>
            </Stack>
            <Box sx={{ width: '100px', height: '90px' }}>
                <Image alt="product" src={Shoe7} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
        </Stack>
    )
}


const steps = [
    {
        label: 'Order Confirmed',
        active: true,
    },
    {
        label: 'Dispatched',
        active: true,
    },
    {
        label: 'Out for Delivery',
        active: true,
    },
    {
        label: 'On the Way',
        active: false,
    },
];


export const Option = ({ title, path }) => {
    return (
        <Link href={path}>
            <Stack gap={2} direction={"row"} sx={{ position: 'relative', padding: '15px', border:"1px solid #ECE6F0" , borderRadius: '5px', alignItems: 'center' }}>
                <IonIcon style={{ fontSize: '25px' }} icon={layersOutline} />
                <Typography sx={{ fontSize: '18px' }}>{title}</Typography>
                <IonIcon icon={caretForward} style={{ position: 'absolute', right: '15px' }} />
            </Stack>
        </Link>
    )
}