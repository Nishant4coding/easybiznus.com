"use client";
import { Button, Stack, Typography, Checkbox, FormControlLabel } from '@mui/material';
import styles from './account.module.css';
import { IonIcon } from '@ionic/react';
import { radioButtonOffOutline, radioButtonOnOutline } from 'ionicons/icons';
import Link from 'next/link';
import { useState } from 'react';

const Profile = ({ setForm }) => {
    const [set, setSet] = useState(true);

    return (
        <Stack sx={{ width: '80%', alignItems: 'center' }}>
            <Typography sx={{ paddingBottom: '10px', borderBottom: '1px solid #A0A0A0', width: '82%', fontSize: '23px', fontWeight: '600', marginBottom: '40px' }}>Edit Profile</Typography>

            <Stack sx={{ width: '100%', marginBottom: '160px' }} gap={5}>


                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input title={"First Name *"} placeholder={"First Name"} width={"82%"} />
                </Stack>
                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input title={"Last Name *"} placeholder={"Last Name"} width={"82%"} />
                </Stack>

                <Stack direction={"row"} style={{ paddingLeft: '10%' }} gap={1}>
                    {set ?
                        <Stack gap={2.1} sx={{ paddingTop: '3px' }}>
                            <IonIcon icon={radioButtonOnOutline}></IonIcon>
                            <IonIcon icon={radioButtonOffOutline}></IonIcon>
                        </Stack> :
                        <Stack gap={2.1} sx={{ paddingTop: '3px' }}>
                            <IonIcon icon={radioButtonOffOutline}></IonIcon>
                            <IonIcon icon={radioButtonOnOutline}></IonIcon>
                        </Stack>
                    }
                    <Stack gap={1}>
                        <Typography sx={{cursor:'pointer'}} onClick={() =>setSet(true)}>Male</Typography>
                        <Typography sx={{cursor:'pointer'}} onClick={() =>setSet(false)}>Female</Typography>
                    </Stack>
                </Stack>

                <Stack direction={"column"} style={{ width: '82%', margin: '0 auto', alignItems: 'center' }}>
                    <Typography className={styles.inputhead} style={{ width: '100%' }}>DOB *</Typography>
                    <Stack direction={"row"} style={{ width: '100%', justifyContent: 'space-between' }} gap={1}>
                        <Input placeholder={"DD"} width={"32%"} />
                        <Input placeholder={"MM"} width={"32%"} />
                        <Input placeholder={"YYYY"} width={"32%"} />
                    </Stack>
                </Stack>

                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input title={"Email *"} placeholder={"xyz123@gmail.com"} width={"82%"} />
                </Stack>

            </Stack>
            <Button variant='contained' className={styles.button}
                onClick={() => setForm(false)}
            >
                SAVE
            </Button>
        </Stack>
    )
}

export default Profile;

const Input = ({ title, placeholder, width, children, fsize }) => {
    return (
        <Stack gap={1} sx={{ width: width ? width : '40%', position: 'relative' }}>
            <Typography style={{ fontSize: fsize ? fsize : "" }} className={styles.inputhead}>{title}</Typography>
            <input type="text" placeholder={placeholder} className={styles.input}></input>
            {children}
        </Stack>
    )
}
