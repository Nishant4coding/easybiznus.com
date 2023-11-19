import { Stack, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { Avatar3D, Pen, Verified } from '@/assets/svg';
import React from 'react'
import { storefrontOutline, home, businessOutline, caretForward, addOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import styles from '../account.module.css';

const Profile = () => {
    return (
        <Stack sx={{ width: '100%' }} gap={4}>

            <Stack sx={{ backgroundColor: '#fff', borderRadius: '10px', position: 'relative', alignItems: 'center' }}>
                <Image src={Pen} alt="edit" style={{ position: 'absolute', top: '15px', right: '15px' }} />
                <Box sx={{ position: 'absolute', width: '80px', height: '80px', border: '2px solid #0D1A26', borderRadius: '100%', top: '-40px' }}>
                    <Image src={Avatar3D} alt="photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Stack sx={{ alignItems: 'center', justifyContent: 'center', margin: '50px 0px 20px 0px' }}>
                    <Typography sx={{ display: 'flex', gap: '10px', fontSize: '22px', alignItems: 'center' }}>
                        Arun
                        <Image src={Verified} alt="verified" style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
                    </Typography>
                    <Typography sx={{ color: '#9E9898', fontSize: '15px' }}>+91 9888324512</Typography>
                </Stack>
                <Typography sx={{ borderRadius: '0 0 10px 10px', width: '100%', backgroundColor: '#0D1A26', letterSpacing: '8px', color: '#fff', textAlign: 'center', fontSize: '20px' }}>USER</Typography>
            </Stack>

            <Stack>
                <Typography sx={{ fontSize: '15px' }}>Contact Details</Typography>
                <Card1 title="Registered Mobile Number" value="+91 9888324512" />
            </Stack>

            <Stack gap={0.8}>
                <Typography sx={{ fontSize: '15px' }}>Profile Details</Typography>
                <Card1 title="Name" value="Arun" />
                <Card1 title="Gender" value="Male" />
                <Card1 title="Email Id" value="gopalkansal1234@gmail.com" />
                <Card1 title="Date of Birth" value="13 March" />
            </Stack>

            <Stack gap={0.8}>
                <Typography sx={{ fontSize: '15px' }}>Address</Typography>
                {
                    addressArray.map((item, index) => (
                        <Card2 icon={item.icon} title={item.title} value={item.sub} key={index} />
                    ))
                }
            </Stack>

            <Stack gap={0.8}>
                <Typography sx={{ fontSize: '15px' }}>Actions</Typography>
                <Card1 title="Password" value="Reset Password" />
                <Card1 title="Delete your Account" value="Delete Account" color="#F55E53"/>
            </Stack>
            

            <Stack sx={{alignItems:'center'}}>
                <Button variant='outlined' className={styles.buttonOutlined} sx={{minWidth:'150px', maxWidth:'200px', width:'50%'}}>
                    LOGOUT
                </Button>
            </Stack>
        </Stack>
    )
}

export default Profile;

const Card1 = ({ title, value, color}) => {
    return (
        <Stack gap={0} sx={{ padding: '10px 25px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <Typography sx={{ fontSize: '14px' }}>{title}</Typography>
            <Typography sx={{ fontSize: '20px', color:color?color:"#000" }}>{value}</Typography>
        </Stack>
    )
}

const Card2 = ({ icon, title, value }) => {
    return (
        <Stack className={icon===home?styles.selectedCard:''} direction={"row"} gap={1.5} sx={{ padding: '10px 20px', backgroundColor: '#fff', borderRadius: '5px', alignItems: 'center', position: 'relative' }}>
            <IonIcon icon={icon} style={{ fontSize: '25px' }} />
            <Stack sx={{marginRight:'20px'}}>
                <Typography sx={{ fontSize: '16px' }}>{title}</Typography>
                {value&&<Typography sx={{ fontSize: '13px' }}>{value}</Typography>}
            </Stack>
            <IonIcon icon={caretForward} style={{ position: 'absolute', right: '20px' }} />
        </Stack>
    )
}

const addressArray = [
    {
        title: "Home",
        sub: "1067, Verona Mahagun, Delhi(205101)",
        icon: home
    },
    {
        title: "Apartments",
        sub: "1067, Verona Mahagun, Delhi(205101)",
        icon: businessOutline
    },
    {
        title: "Office",
        sub: "1067, Verona Mahagun, Delhi(205101)",
        icon: storefrontOutline
    },
    {
        title: 'Add New Address',
        icon: addOutline
    }
]
