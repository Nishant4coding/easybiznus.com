import { Logo } from '@/assets/svg'
import Image from 'next/image'
import React from 'react';
import { Stack } from '@mui/material';

const Footer = () => {
  return (
    <Stack sx={{marginTop:'50px', backgroundColor:'#0D1A26', padding:'25px', alignItems:'center'}}>
      <Image alt="LOGO" src={Logo}/>
    </Stack>
  )
}

export default Footer
