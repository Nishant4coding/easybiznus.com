"use client";
import { Button, Stack, Typography, Checkbox, FormControlLabel } from '@mui/material';
import styles from './account.module.css';
import { IonIcon } from '@ionic/react';
import { chevronDownOutline } from 'ionicons/icons';
import Link from 'next/link';
import global from '@/global.module.css';

const NewAddress = ({ setForm }) => {
    return (
        <Stack sx={{ width: '80%', alignItems: 'center' }}>
            <Typography sx={{ paddingBottom: '10px', borderBottom: '1px solid #A0A0A0', width: '82%', fontSize: '23px', fontWeight: '600', marginBottom: '40px' }}>New Address</Typography>

            <Stack sx={{ width: '100%', marginBottom: '160px' }} gap={5}>
                <Stack direction={"column"} gap={2} sx={{ width: '82%', margin: '0px auto' }}>
                    <Typography sx={{ paddingBottom: '10px', width: '100%', fontSize: '20px', fontWeight: '600', }}>Address Title</Typography>
                    <Stack direction={"row"} sx={{ width: '100%' }} gap={1}>
                        {
                            selectArray.map((item) => (
                                <Link key={item} href="#" style={{ padding: "5px 10px", textAlign: 'center', border: '1px solid #a9a9a9', borderRadius: '5px', width: '25%', fontWeight:'600' }}>{item}</Link>
                            ))
                        }
                    </Stack>
                        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                            <Input placeholder={"Address Title"} width={"100%"} />
                        </Stack>
                </Stack>

                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input title={"First Name"} placeholder={"First Name"} />
                    <Input title={"Last Name"} placeholder={"Last Name"} />
                </Stack>

                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input title={"Address Line 1 *"} placeholder={"Address Line 1"} width={"82%"} />
                </Stack>
                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input title={"Address Line 2*"} placeholder={"Address Line 2"} width={"82%"} />
                </Stack>
                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input title={"Country"} placeholder={"Select Country"} >
                        <IonIcon icon={chevronDownOutline} className={styles.downArrow}></IonIcon>
                    </Input>
                    <Input title={"State *"} placeholder={"Select State"} >
                        <IonIcon icon={chevronDownOutline} className={styles.downArrow}></IonIcon>
                    </Input>
                </Stack>
                <Stack direction={"row"} gap={2} className={styles.inputcontainer} sx={{ alignItems: 'flex-end' }}>
                    <Input title={"City *"} placeholder={"Select City"} >
                        <IonIcon icon={chevronDownOutline} className={styles.downArrow}></IonIcon>
                    </Input>
                    <Input title={"PIN CODE *"} placeholder={"State"} fsize={"15px"}>
                        <IonIcon icon={chevronDownOutline} className={styles.downArrow}></IonIcon>
                    </Input>
                </Stack>
                <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
                    <Input title={"Phone Number *"} placeholder={"+91"} width={"82%"} />
                </Stack>
                <Stack direction={"row"} gap={2} sx={{ paddingLeft: '8%' }}>
                    <FormControlLabel
                        control={<Checkbox defaultChecked color="default" />}
                        label="Make Default"
                        labelPlacement="right"
                    />

                </Stack>
            </Stack>
            <Button variant='contained' className={global.button}
                onClick={() => setForm(false)}
                style={{padding:"10px 50px", fontSize:'13px'}}
            >
                SAVE
            </Button>
        </Stack>
    )
}

export default NewAddress;

const Input = ({ title, placeholder, width, children, fsize }) => {
    return (
        <Stack gap={1} sx={{ width: width ? width : '40%', position: 'relative' }}>
            <Typography style={{ fontSize: fsize ? fsize : "" }} className={styles.inputhead}>{title}</Typography>
            <input type="text" placeholder={placeholder} className={styles.input}></input>
            {children}
        </Stack>
    )
}

const selectArray = [
    "Home",
    "Apartments",
    "Office",
    "Other"
]