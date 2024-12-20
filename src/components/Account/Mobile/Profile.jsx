import {useState} from 'react'
import { Stack, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { Avatar3D, Pen, Verified } from '@/assets/svg';
import { storefrontOutline, home, businessOutline, caretForward, addOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import styles from '../account.module.css';
import global from '@/global.module.css';

const Profile = () => {
    const[address, setAddress] = useState(0);

    return (
        <Stack sx={{ width: '100%' }} gap={4}>

            <Stack className={styles.mobileAccountContainer}>
                <Image src={Pen} alt="edit" style={{ position: 'absolute', top: '15px', right: '15px' }} />
                <Box className={styles.profilePhoto}>
                    <Image src={Avatar3D} alt="photo" className={global.image} />
                </Box>
                <Stack sx={{ alignItems: 'center', justifyContent: 'center', margin: '50px 0px 20px 0px' }}>
                    <Typography className={styles.mobileUsername}>
                        Arun
                        <Image src={Verified} alt="verified"  />
                    </Typography>
                    <Typography sx={{ color: '#9E9898', fontSize: '15px' }}>+91 9999999999</Typography>
                </Stack>
                <Typography className={styles.accountType}>USER</Typography>
            </Stack>

            <Stack>
                <Typography sx={{ fontSize: '15px' }}>Contact Details</Typography>
                <Card1 title="Registered Mobile Number" value="+91 9999999999" />
            </Stack>

            <Stack gap={0.8}>
                <Typography sx={{ fontSize: '15px' }}>Profile Details</Typography>
                {
                    cardArray1.map((item, index)=>(
                        <Card1 title={item.title} value={item.value} color={item?.color} key={index}/>        
                    ))
                }
            </Stack>

            <Stack gap={0.8}>
                <Typography sx={{ fontSize: '15px' }}>Address</Typography>
                {
                    addressArray.map((item, index) => (
                        <Card2 setAddress={setAddress} index={index} selected={address===index} icon={item.icon} title={item.title} value={item.sub} key={index} />
                    ))
                }
            </Stack>

            <Stack gap={0.8}>
                <Typography sx={{ fontSize: '15px' }}>Actions</Typography>
                {
                    cardArray2.map((item, index)=>(
                        <Card1 title={item.title} value={item.value} color={item?.color} key={index}/>        
                    ))
                }
            </Stack>


            <Stack sx={{ alignItems: 'center' }}>
                <Button variant='outlined' className={styles.buttonOutlined} sx={{ minWidth: '150px', maxWidth: '200px', width: '50%' }}>
                    LOGOUT
                </Button>
            </Stack>
        </Stack>
    )
}

export default Profile;


const Card1 = ({ title, value, color }) => {
    return (
        <Stack gap={0} sx={{ padding: '10px 25px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <Typography sx={{ fontSize: '14px' }}>{title}</Typography>
            <Typography sx={{ fontSize: '20px', color: color ? color : "#000" }}>{value}</Typography>
        </Stack>
    )
}


const Card2 = ({ setAddress, index,icon, selected, title, value }) => {
    return (
        <Stack onClick={()=>setAddress(index)} className={selected ? styles.selectedCard : ''} direction={"row"} gap={1.5} sx={{ padding: '10px 20px', backgroundColor: '#fff', borderRadius: '5px', alignItems: 'center', position: 'relative' }}>
            <IonIcon icon={icon} style={{ fontSize: '25px' }} />
            <Stack sx={{ marginRight: '20px' }}>
                <Typography sx={{ fontSize: '16px' }}>{title}</Typography>
                {value && <Typography sx={{ fontSize: '13px' }}>{value}</Typography>}
            </Stack>
            <IonIcon icon={caretForward} style={{ position: 'absolute', right: '20px' }} />
        </Stack>
    )
}


const cardArray1=[
    {
        title:'Name',
        value:'Arun'
    },
    {
        title:'Gender',
        value:'Male'
    },
    {
        title:'Email Id',
        value:'gopalkansal1234@gmail.com'
    },
    {
        title:'Date of Birth',
        value:'13 March'
    }
]

const cardArray2=[
    {
        title:'Password',
        value:'Reset Password'
    },
    {
        title:'Delete your Account',
        value:'Delete Account',
        color:'#F55E53'
    },
]


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
