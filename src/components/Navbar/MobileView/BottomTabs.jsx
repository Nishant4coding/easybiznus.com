import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Cash, Home, Search, UserBlack } from '@/assets/svg';
import Link from 'next/link';

const BottomTabs = ({ handleDrawerClose }) => {
    return (
        <Stack direction={"row"} sx={{ width: '100%', backgroundColor: '#0D1A26', padding: '10px', position: 'absolute', bottom: '0px', zIndex: 1, justifyContent: 'space-around' }}>
            {
                tabArray.map((item, index) => (
                    <Link href={item.path} key={index} onClick={handleDrawerClose}>
                        <Tab data={item} />
                    </Link>
                ))
            }
        </Stack>
    )
}

export default BottomTabs


const Tab = ({ data }) => {
    const { icon, title } = data;

    return (
        <Stack sx={{ width: '100px', alignItems: 'center' }}>
            <Box sx={{ width: '20px', height: '20px' }}>
                <Image src={icon} alt="icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography sx={{ color: '#fff', fontSize: '13px' }}>{title}</Typography>
        </Stack>
    )
}

const tabArray = [
    {
        icon: Home,
        title: 'Home',
        path: '/'
    },
    {
        icon: Search,
        title: 'Search',
        path: '/'
    },
    {
        icon: Cash,
        title: 'Try & Buy',
        path: '/product'
    },
    {
        icon: UserBlack,
        title: 'Profile',
        path: '/'
    }
]