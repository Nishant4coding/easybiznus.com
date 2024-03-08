"use client";
import { Button, Stack, Typography, Checkbox, FormControlLabel } from '@mui/material';
import styles from './account.module.css';
import { IonIcon } from '@ionic/react';
import { radioButtonOffOutline, radioButtonOnOutline } from 'ionicons/icons';
import global from '@/global.module.css';
import { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile } from '@/Redux/Features/profile/profileSlice';

const Profile = ({ }) => {
    const [set, setSet] = useState(true);
    const [userData, setUserData] = useState(null);
    const dispatch = useDispatch();
    const profileState = useSelector(state => state.profile);
    useLayoutEffect(() => {
        if (profileState.profile === null) {
            dispatch(getProfile());
            setUserData(null);
        }
        if (profileState.profile) {
            setUserData(profileState.profile);
        }
    }, [profileState.profile]);

    const handleUpadteProfile = async () => {
        dispatch(updateProfile(userData))
    }

    return (
        <Stack sx={{ width: '80%', alignItems: 'center' }}>
            <Typography sx={{ paddingBottom: '10px', borderBottom: '1px solid #A0A0A0', width: '82%', fontSize: '23px', fontWeight: '600', marginBottom: '40px' }}>Edit Profile</Typography>

            <Stack sx={{ width: '100%', marginBottom: '160px' }} gap={5}>


                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input title={"First Name *"} placeholder={"First Name"} width={"82%"} value={userData?.firstName} changeValue={setUserData} name={"firstName"} />
                </Stack>
                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input title={"Last Name *"} placeholder={"Last Name"} width={"82%"} value={userData?.lastName} changeValue={setUserData} name={"lastName"} />
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
                        <Typography sx={{ cursor: 'pointer' }} onClick={() => setSet(true)}>Male</Typography>
                        <Typography sx={{ cursor: 'pointer' }} onClick={() => setSet(false)}>Female</Typography>
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
                    <Input title={"Email *"} placeholder={"xyz123@gmail.com"} width={"82%"} value={userData?.email} changeValue={setUserData} />
                </Stack>

            </Stack>
            <Button variant='contained' className={global.button}
                style={{ padding: '10px 50px', fontSize: '13px' }}
                onClick={handleUpadteProfile}
            >
                SAVE
            </Button>
        </Stack>
    )
}

export default Profile;

const Input = ({ name, value, title, placeholder, width, children, fsize, changeValue }) => {
    return (
        <Stack gap={1} sx={{ width: width ? width : '40%', position: 'relative' }}>
            <Typography style={{ fontSize: fsize ? fsize : "" }} className={styles.inputhead}>{title}</Typography>
            <input type="text" placeholder={placeholder} className={styles.input} value={value} onChange={(e) => changeValue({ ...value, [e.target.name]: e.target.value })} name={name}></input>
            {children}
        </Stack>
    )
}
