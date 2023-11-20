"use client"
import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react';
import styles from './cart.module.css'
import CustomButton from '../CustomBtn/CustomButton';
import Image from 'next/image';
import { HomeIcon } from '@/assets/svg/index';

const PaymentOpt = () => {

    return (
        <>
            <Stack sx={{ marginTop: "55px", boxShadow: 1, borderRadius: 3 }} paddingX={2} paddingY={2} >
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                    <Typography fontSize={"10px"} fontWeight={"bold"}>Mercedes AMG Petronas F1 ,Wired Run Unisex Sneakers</Typography>
                    <Typography fontWeight={"bold"}>₹ 3539</Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} marginTop={2} >
                    <Stack direction={"row"} gap={2}>
                        <Image src={HomeIcon} alt='Home' />
                        <Stack>
                            <Typography fontSize={"16px"}>Home</Typography>
                            <Typography fontSize={"9px"}>1067, Verona Mahagun Delhi (201501)</Typography>
                        </Stack>
                    </Stack>
                    <Typography color={"#F55E53"} fontSize={"9px"}>Change</Typography>
                </Stack>
                <CustomButton name={"PAY"} />
            </Stack>
            <Stack direction={"row"} gap={3} paddingLeft={2}>
                <Typography marginTop={2}>Preferred Payment</Typography>
                <Typography className={styles.subTotal} >Pay rest : 34,99</Typography>
            </Stack>
        </>
    )
}

export default PaymentOpt;