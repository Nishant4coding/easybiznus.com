"use client";
import { Button, Stack, Typography, Checkbox, FormControlLabel } from '@mui/material';
import styles from './account.module.css';
import { IonIcon } from '@ionic/react';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';
import Link from 'next/link';
import { useState } from 'react';

const Profile = ({ setForm }) => {
    const [password, setPassword] = useState(true);

    const handlePass=(e)=>{
        setPassword(e.target.value);
        console.log('====================================');
        console.log(password);
        console.log('====================================');
    }

    return (
        <Stack sx={{ width: '80%', alignItems: 'center' }}>
            <Typography sx={{ paddingBottom: '10px', borderBottom: '1px solid #A0A0A0', width: '82%', fontSize: '23px', fontWeight: '600', marginBottom: '40px' }}>Change Password</Typography>

            <Stack sx={{ width: '100%', marginBottom: '160px' }} gap={3}>


                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input title={"Current Password"} placeholder={"Current Password"} width={"82%"} />
                </Stack>
                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input type={"password"} handlePass={handlePass} title={"New Password"} placeholder={"New Password"} width={"82%"} />
                </Stack>

                <Stack sx={{paddingLeft:'9%'}}>
                    <TextIcon
                        correct={password.length >= 8 ? true : false}
                        text="Minimum 8 characters"
                    />
                    <TextIcon
                        correct={password.length <= 15 ? true : false}
                        text="Maximum 15 characters"
                    />
                    <TextIcon
                        correct={/[a-z]/.test(password) ? true : false}
                        text="1 lower case"
                    />
                    <TextIcon
                        correct={/[A-Z]/.test(password) ? true : false}
                        text="1 upper case"
                    />
                    <TextIcon
                        correct={/[0-9]/.test(password) ? true : false}
                        text="1 digit"
                    />
                    <TextIcon
                        correct={
                            /[!@#$%^&*(),.?":{}|<>]/.test(password) ? true : false
                        }
                        text="1 special character (!@#$%^&*)"
                    />
                </Stack>

                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input type={"password"} title={"Confirm New Password"} placeholder={"Confirm New Password"} width={"82%"} />
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

const Input = ({type, handlePass, title, placeholder, width, children, fsize }) => {
    return (
        <Stack gap={1} sx={{ width: width ? width : '40%', position: 'relative' }}>
            <Typography style={{ fontSize: fsize ? fsize : "" }} className={styles.inputhead}>{title}</Typography>
            <input onChange={handlePass} type={type?type:"text"} placeholder={placeholder} className={styles.input}></input>
            {children}
        </Stack>
    )
}


const TextIcon = (props) => {
    return (
        <Stack direction={"row"} gap={1} style={{alignItems:'center'}}>
            <IonIcon icon={props.correct ? checkmarkCircleOutline : closeCircleOutline} size={18} style={{color:props.correct ? "#1BCFB4" : "#F55E53"}} />
            <Typography style={{fontSize:'13px'}}>{props.text}</Typography>
        </Stack>
    );
};

