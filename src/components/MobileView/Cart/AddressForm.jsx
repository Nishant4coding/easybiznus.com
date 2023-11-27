"use client"
import { Stack, Checkbox, Typography, FormControlLabel, Button, TextField, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { CrossCircle, PinBlack, Pen } from '@/assets/svg/index';
import styles from './cart.module.css';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import CustomButton from '../CustomBtn/CustomButton';

const AddressForm = ({ openModal, setOpenModal }) => {
    const [value, setValue] = useState(null);

    const data =
    {
        title: "Pandara Park",
        icon: PinBlack,
        address: "1067, Verona Mahagun Delhi (201501)",
    }

    return (
        <>
            {
                !openModal && <Stack sx={{height:"100vh"}}>
                    <Stack marginY={"5px"} paddingX={2} paddingY={1} className={styles.modalCon} >
                        <Stack direction={"row"} gap={2} >
                            <Image src={data.icon} alt='Icon' />
                            <Stack >
                                <Typography fontSize={"16px"}>{data.title}</Typography>
                                <Typography fontSize={"9px"} sx={{ cursor: "pointer" }}>{data.address}</Typography>
                            </Stack>
                        </Stack>
                        <Typography color={"#F55E53"} fontSize={"9px"}>Change</Typography>
                    </Stack>

                    <Stack gap={2} marginTop={1} paddingX={2}>
                        {["Contact Number", "House / Flat / Block No.", "Apartment / Road / Area", "Landmark (Optional)"].map((item, id) => {
                            return (
                                <TextField
                                    key={id}
                                    label={item}
                                    size='small'
                                    color='secondary'
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end' > {id === 0 ? <Image src={Pen} alt="pen" /> : <Image src={CrossCircle} alt='close' />}</InputAdornment>
                                    }}
                                />
                            )
                        })}
                    </Stack>

                    <Stack direction={"row"} gap={2} marginY={2} paddingX={2} >
                        {["Pincode", "City"].map((item, id) => {
                            return (
                                <TextField
                                    key={id}
                                    label={item}
                                    size='small'
                                    color='secondary'
                                />
                            )
                        })}
                    </Stack>


                    <Stack gap={2} paddingX={2}>
                        {["State", "Save As"].map((item, id) => {
                            return (
                                <TextField
                                    key={id}
                                    label={item}
                                    size='small'
                                    color='secondary'
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end' > <Image src={CrossCircle} alt='close' /></InputAdornment>
                                    }}
                                />
                            )
                        })}
                    </Stack>
                    <Stack paddingX={2}>
                        <FormControlLabel control={<Checkbox color="default" />} label="Make Default" />
                    </Stack>
                    <Stack alignItems={"center"}>
                        <Button className={styles.btn} onClick={() => setOpenModal(true)}>ADD ADDRESS</Button>
                    </Stack>
                </Stack>
            }
        </>
    )
}

export default AddressForm