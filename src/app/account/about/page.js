'use client'
import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { IonIcon } from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'
import global from '@/global.module.css';
import About from '@/components/Account/Mobile/About';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <Box className={global.mobile} style={{ minHeight: '100vh', padding: '55px 0px 15px 0px' }}>
      <Stack gap={2} direction={"row"} sx={{ backgroundColor: '#0D1A26', width: '100%', padding: '10px', alignItems: 'center' }}>
        <IonIcon onClick={() => router.back()} icon={arrowBackOutline} style={{ fontSize: '20px', color: '#fff' }} />
        <Typography sx={{ color: '#fff', fontWeight: '600', letterSpacing: '10px' }}>About Us</Typography>
      </Stack>
      <About />
    </Box>
  )
}

export default Page
