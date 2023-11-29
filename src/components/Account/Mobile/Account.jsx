import { Avatar3D, Verified } from '@/assets/svg';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../account.module.css';
import { IonIcon } from '@ionic/react';
import { caretForward, layersOutline } from 'ionicons/icons';
import global from '@/global.module.css';

const Account = () => {
    return (
        <Stack sx={{ width: '100%' }} gap={3}>

            <Stack className={styles.mobileAccountContainer}>
                <Box className={styles.profilePhoto}>
                    <Image src={Avatar3D} alt="photo" className={global.image} />
                </Box>
                <Stack className={styles.profileDetails}>
                    <Typography className={styles.mobileUsername}>
                        User Name
                        <Image src={Verified} alt="verified" style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
                    </Typography>
                    <Typography sx={{ color: '#9E9898', fontSize: '15px' }}>+91 99XXXXXX99</Typography>
                </Stack>
                <Typography className={styles.accountType}>PRIME</Typography>
            </Stack>

            <Stack className={styles.sale}>
                <Typography className={global.headingMobile} style={{ color:'white'}}>50% OFF</Typography>
                <Typography sx={{marginBottom:'20px', fontSize:'25px', color:'white'}}>New arrival sale</Typography>
            </Stack>

            <Stack direction={"row"} sx={{justifyContent:'space-between'}}>
                <Stack className={styles.mobileAccountCard1}>
                    <Typography>My Cart</Typography>
                    <Typography className={global.boldSubheadingMobile}>2</Typography>
                </Stack>
                <Stack className={styles.mobileAccountCard1}>
                    <Typography>Wishlist</Typography>
                    <Typography className={global.boldSubheadingMobile}>186</Typography>
                </Stack>
            </Stack>

            <Stack gap={0.6}>
                <Typography className={styles.mobileSection}>ORDERS</Typography>
                {
                    optionArray1.map((item, index)=>(
                        <Option key={index} title={item.title} path={item.path}/>
                    ))
                }
            </Stack>

            <Stack gap={0.6}>
                <Typography className={styles.mobileSection}>User</Typography>
                {
                    optionArray2.map((item, index)=>(
                        <Option key={index} title={item.title} path={item.path}/>
                    ))
                }
            </Stack>

            <Stack gap={0.6} sx={{marginBottom:'40px'}}>
                <Typography className={styles.mobileSection}>About</Typography>
                {
                    optionArray3.map((item, index)=>(
                        <Option key={index} title={item.title} path={item.path}/>
                    ))
                }
            </Stack>

        </Stack>
    )
}

export default Account;




const Option=({title, path})=>{
    return(
        <Link href={path}>
        <Stack gap={2} direction={"row"} sx={{position:'relative', padding:'15px', backgroundColor:'#fff', borderRadius:'5px', alignItems:'center'}}>
            <IonIcon style={{fontSize:'25px'}} icon={layersOutline}/>
            <Typography sx={{fontSize:'18px'}}>{title}</Typography>
            <IonIcon icon={caretForward} style={{position:'absolute', right:'15px'}}/>
        </Stack>
        </Link>
    )
}


const optionArray1=[
    {
        title:'My Order',
        path:'/orders'
    },
    {
        title:'Returns',
        path:'/orders/return/123'
    }
]

const optionArray2=[
    {
        title:'My Profile',
        path:'/profile'
    },
    {
        title:'Customer Service',
        path:'#'
    },
    {
        title:'Settings',
        path:'/account/setting'
    },
    {
        title:'Wallet',
        path:'/wallet'
    }
]

const optionArray3=[
    {
        title:'About Us',
        path:'/account/about'
    },
    {
        title:'Return Policy',
        path:'/account/shipping-return'
    },
    {
        title:'Shipping & Delivery',
        path:'/account/shipping-return'
    }
]