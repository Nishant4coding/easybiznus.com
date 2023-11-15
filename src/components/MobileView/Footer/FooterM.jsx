"use client"
import React from 'react';
import Image from 'next/image';
import { Logo } from '@/assets/svg/index';
import { Stack, Typography } from '@mui/material';

const FooterM = () => {
  return (
    <>
    <Stack justifyContent={"center"} alignItems={"center"} paddingY={4}>
      <Typography color={"#CECECE"} >
      ... Loading
      </Typography>
    </Stack>
    <Stack sx={{backgroundColor:"#0D1A26", paddingY:2}} justifyContent={"center"} alignItems={"center"}>
        <Image src={Logo} alt='logo'/>
    </Stack>
    </>
  )
}

export default FooterM;
