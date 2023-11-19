import { Avatar3D, Verified } from '@/assets/svg';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../account.module.css';
import { IonIcon } from '@ionic/react';
import { caretForward, layersOutline } from 'ionicons/icons';

const Account = () => {
    return (
        <Stack sx={{ width: '100%' }} gap={3}>

            <Stack sx={{ backgroundColor: '#fff', borderRadius: '20px 20px 0 0', position: 'relative', alignItems: 'center' }}>
                <Box sx={{ position: 'absolute', width: '80px', height: '80px', border: '2px solid #0D1A26', borderRadius: '100%', top: '-40px' }}>
                    <Image src={Avatar3D} alt="photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Stack sx={{ alignItems: 'flex-start', justifyContent: 'center', margin: '50px 0px 20px 0px' }}>
                    <Typography sx={{ display: 'flex', gap: '10px', fontSize: '22px', alignItems: 'center' }}>
                        User Name
                        <Image src={Verified} alt="verified" style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
                    </Typography>
                    <Typography sx={{ color: '#9E9898', fontSize: '15px' }}>+91 9888324512</Typography>
                </Stack>
                <Typography sx={{ width: '100%', backgroundColor: '#0D1A26', letterSpacing: '8px', color: '#fff', textAlign: 'center', fontSize: '20px' }}>PRIME</Typography>
            </Stack>

            <Stack className={styles.sale}>
                <Typography sx={{fontWeight:'600', fontSize:'25px', color:'white'}}>50% OFF</Typography>
                <Typography sx={{marginBottom:'20px', fontSize:'25px', color:'white'}}>New arrival sale</Typography>
            </Stack>

            <Stack direction={"row"} sx={{justifyContent:'space-between'}}>
                <Stack sx={{borderRadius:'10px', border:'1px solid #0D1A26', width:'150px', alignItems:'center', justifyContent:'center', padding:'5px'}}>
                    <Typography>My Cart</Typography>
                    <Typography sx={{fontWeight:'900', fontSize:'18px'}}>2</Typography>
                </Stack>
                <Stack sx={{borderRadius:'10px', border:'1px solid #0D1A26', width:'150px', alignItems:'center', justifyContent:'center', padding:'5px'}}>
                    <Typography>Wishlist</Typography>
                    <Typography sx={{fontWeight:'900', fontSize:'18px'}}>186</Typography>
                </Stack>
            </Stack>

            <Stack gap={0.6}>
                <Typography sx={{fontSize:'21px', fontWeight:'600', marginBottom:'10px'}}>ORDERS</Typography>
                <Option title="My Order" path="/orders"/>
                <Option title="Returns" path="/orders/123"/>
            </Stack>

            <Stack gap={0.6}>
                <Typography sx={{fontSize:'21px', fontWeight:'600', marginBottom:'10px'}}>User</Typography>
                <Option title="My Profile" path="/profile"/>
                <Option title="Customer Service" path="#"/>
                <Option title="Settings" path="/account/setting"/>
                <Option title="Wallet" path="/wallet"/>
            </Stack>

            <Stack gap={0.6} sx={{marginBottom:'40px'}}>
                <Typography sx={{fontSize:'21px', fontWeight:'600', marginBottom:'10px'}}>About</Typography>
                <Option title="About Us" path="/account/about"/>
                <Option title="Return Policy" path="/account/shipping-return"/>
                <Option title="Shipping & Delivery" path="/account/shipping-return"/>
            </Stack>

        </Stack>
    )
}

export default Account


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