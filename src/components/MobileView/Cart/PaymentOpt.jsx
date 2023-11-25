"use client"
import { Checkbox, Stack, Typography, Radio, FormControl, RadioGroup } from '@mui/material'
import React, { useState } from 'react';
import styles from './cart.module.css'
import CustomButton from '../CustomBtn/CustomButton';
import Image from 'next/image';
import { HomeIcon, RazorPay } from '@/assets/svg/index';

const PaymentOpt = () => {
    const [selectedValue, setSelectedValue] = useState('onlinePay');

    const data = {
        total: "3,539",
        shoeTitle:"Mercedes AMG Petronas F1 ,Wired Run Unisex Sneakers",
        address: "1067, Verona Mahagun Delhi (201501)",
        payRest: "3,499",
        walletMoney: 1000
    }

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <Stack sx={{ minHeight:'95vh', position:'relative', alignItems:'center'}}>
            <Stack sx={{ marginTop: "55px", }} paddingY={2} >
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} paddingX={2} >
                    <Typography fontSize={"10px"} fontWeight={"bold"}>{data.shoeTitle}</Typography>
                    <Typography fontWeight={"bold"}>₹ {data.total}</Typography>
                </Stack>

                <Stack direction={"row"} paddingX={2} justifyContent={"space-between"} alignItems={"center"} marginTop={2} sx={{boxShadow:'0 5px 15px 0 #DBDBDB', borderRadius:'5px'}} paddingY={0.5}>
                    <Stack direction={"row"} gap={2}>
                        <Image src={HomeIcon} alt='Home' />
                        <Stack>
                            <Typography fontSize={"16px"}>Home</Typography>
                            <Typography fontSize={"9px"} sx={{ cursor: "pointer" }}>{data.address}</Typography>
                        </Stack>
                    </Stack>
                    <Typography color={"#F55E53"} fontSize={"9px"}>Change</Typography>
                </Stack>

            </Stack>
            <Stack direction={"row"} gap={3} paddingLeft={2} sx={{alignItems:'center', width:'100%'}}>
                <Typography marginTop={2} sx={{fontWeight:'600'}}>Preferred Payment</Typography>
                <Typography className={styles.subTotal} >Pay rest : {data.payRest}</Typography>
            </Stack>

            <Stack paddingX={3} sx={{width:'95%', boxShadow:'0 5px 15px 0 #DBDBDB', borderRadius:'10px'}} paddingY={1}>
                <FormControl>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} marginTop={2} >
                        <Stack>
                            <Typography fontSize={"16px"}>Use Wallet Money</Typography>
                            <Typography fontSize={"9px"}>Balance : {data.walletMoney}</Typography>
                        </Stack>
                        <Checkbox
                            defaultChecked
                            sx={{
                                color: "#0F172A",
                                '&.Mui-checked': {
                                    color: "#0F172A",
                                },
                                borderRadius: "5px"
                            }}
                        />
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} marginTop={2} >
                        <Stack>
                            <Image src={RazorPay} alt='Icon' />
                            <Typography fontSize={"9px"}>Online Payments</Typography>
                        </Stack>
                        <Radio
                            checked={selectedValue === 'onlinePay'}
                            onChange={handleChange}
                            value="onlinePay"
                            sx={{
                                color: "#6750A4",
                                '&.Mui-checked': {
                                    color: "#6750A4",
                                },
                            }} />                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} marginTop={2} >
                        <Typography fontSize={"16px"}>Cash on Delivery</Typography>
                        <Radio
                            checked={selectedValue === 'cash'}
                            onChange={handleChange}
                            value="cash"
                            sx={{
                                color: "#6750A4",
                                '&.Mui-checked': {
                                    color: "#6750A4",
                                },
                            }} />
                    </Stack>
                </FormControl>
            </Stack>
            <CustomButton name={"PAY"} />
        </Stack>
    )
}

export default PaymentOpt;