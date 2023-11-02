'use client';
import React, { useState } from 'react'
import { Stack, Typography, Button } from '@mui/material';
import styles from './try.module.css';
import { IonIcon } from '@ionic/react';
import { newspaperOutline, home, radioButtonOnOutline, radioButtonOffOutline, storefrontOutline } from 'ionicons/icons';
import Link from 'next/link';
const Contact = () => {
    const [select, setSelect] = useState();

    return (
        <Stack className={styles.leftboxes} gap={2}>
            <Stack direction={"row"} style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #A0A0A0' }}>
                <Typography className={styles.boxTitle} style={{ border: 'none' }}>
                    <IonIcon icon={newspaperOutline} className={styles.newsicon}></IonIcon>
                    2. Contact Information
                </Typography>
            </Stack>
            <Stack gap={1} direction={"column"} style={{ marginBottom: '10px', alignItems: 'flex-end',}}>
                {
                    boxArray.map((item, index) => (
                        <Link href="#" key={item.title} onClick={() => setSelect(index)} style={{width:'100%'}}>
                            <Box data={item} select={select === index} />
                        </Link>
                    ))
                }
            </Stack>
            <Stack direction={"row"} style={{width:'100%'}} gap={2}>
                <Stack style={{width:'50%'}}>
                    <Typography>Phone Number</Typography>
                    <input type='text' className={styles.input} placeholder='9898989898'></input>
                </Stack>
                <Stack style={{width:'50%'}}>
                    <Typography>Email</Typography>
                    <input type="email" className={styles.input} placeholder='useremail@domain.com'></input>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Contact;

const Box = ({ data, select }) => {
    const { icon, title, subtitile } = data;
    return (
        <Stack gap={2} style={{ border: '1px solid #B5B5B5', borderRadius: '8px', alignItems: 'center', padding: '10px', cursor: "pointer", width: '100%', position: 'relative' }} direction={"row"}>
            <IonIcon icon={icon} className={styles.newsicon}></IonIcon>
            <Typography style={{ fontSize: '15px' }}>
                {title}
                <Typography style={{ fontSize: '12px', color:'#A0A0A0' }}>
                    {subtitile}
                </Typography>
            </Typography>
            {select ?
                <IonIcon icon={radioButtonOnOutline} className={styles.newsicon} style={{position:'absolute', right:'10px'}}></IonIcon>
                :
                <IonIcon icon={radioButtonOffOutline} className={styles.newsicon} style={{position:'absolute', right:'10px'}}></IonIcon>
            }
        </Stack>
    )
}

const boxArray = [
    {
        icon: home,
        title: '+91 8787878787',
        subtitile: 'useremail@domain.com',
    },
]
