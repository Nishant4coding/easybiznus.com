'use client';
import React, { useEffect, useState } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import styles from './checkout.module.css';
import { IonIcon } from '@ionic/react';
import { newspaperOutline, home, add, businessOutline, radioButtonOnOutline, radioButtonOffOutline, storefrontOutline } from 'ionicons/icons';

const Address = ({ addressData }) => {
    const [select, setSelect] = useState(null);
    const [address, setAddress] = useState(addressData || { AddressBooks: [] });

    useEffect(() => {
        setAddress(addressData || { AddressBooks: [] });
    }, [addressData]);

    console.log("address", address);

    return (
        <Stack className={styles.leftboxes} gap={2}>
            <Stack direction={"row"} className={styles.card}>
                <Typography className={styles.boxTitle} style={{ border: 'none' }}>
                    <IonIcon icon={newspaperOutline} className={styles.newsicon}></IonIcon>
                    1. Shipping Address
                </Typography>
                <Button variant="contained" className={styles.button} style={{ margin: "0", padding: '5px 23px', borderRadius: '6px' }}>
                    <IonIcon icon={add} className={styles.newsicon} style={{ fontSize: '18px' }}></IonIcon>
                    New Address
                </Button>
            </Stack>
            <Stack gap={1} direction={"column"} style={{ marginBottom: '10px', alignItems: 'flex-end' }}>
                {
                    address.AddressBooks && address.AddressBooks.map((item, index) => (
                        <Stack key={item.addressTitle} onClick={() => setSelect(index)} style={{ width: '94%' }}>
                            <Box data={item} select={select === index} />
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default Address;

const Box = ({ data, select }) => {
    const { icon, addressTitle, subtitile } = data;
    return (
        <Stack gap={2} style={{ border: '1px solid #B5B5B5', borderRadius: '8px', alignItems: 'center', padding: '10px', cursor: "pointer", width: '100%', position: 'relative' }} direction={"row"}>
            <IonIcon icon={icon} className={styles.newsicon}></IonIcon>
            <Stack>
                <Typography style={{ fontSize: '15px' }}>
                    {addressTitle}
                </Typography>
                <Typography style={{ fontSize: '12px' }}>
                    {subtitile}
                </Typography>
            </Stack>
            {select ?
                <IonIcon icon={radioButtonOnOutline} className={styles.newsicon} style={{ position: 'absolute', right: '10px' }}></IonIcon>
                :
                <IonIcon icon={radioButtonOffOutline} className={styles.newsicon} style={{ position: 'absolute', right: '10px' }}></IonIcon>
            }
        </Stack>
    )
}

const boxArray = [
    {
        icon: home,
        title: 'Home',
        subtitile: '1067, Verona Mahagun Delhi (201501)',
    },
    {
        icon: businessOutline,
        title: 'Apartments',
        subtitile: '1067, Verona Mahagun Delhi (201501)',
    },
    {
        icon: storefrontOutline,
        title: 'Office',
        subtitile: '1067, Verona Mahagun Delhi (201501)',
    }
]
