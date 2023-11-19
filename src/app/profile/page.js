"use client"
import BasicBreadcrumbs from '@/components/BreadCrumbs'
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer';
import Profile from '@/components/Account/Profile';
import global from '@/global.module.css';
import ProfileMobile from '@/components/Account/Mobile/Profile';

const ProfilePage = () => {
  return (
    <>
      <Box className={global.desktop}>
        <BasicBreadcrumbs inactive={inactive} active="My Profile" fsize={"22px"} mt={"20px"} />
        <Stack sx={{ width: '80%', margin: '10px auto', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '50px', fontWeight: '700', textAlign: 'center', marginBottom: '30px' }}>My Profile</Typography>
          <Profile />
        </Stack>
        <Footer />
      </Box>

      <Box className={global.mobile} style={{ padding:'120px 15px 35px 15px', backgroundColor:'#EFEFEF'}}>
        <ProfileMobile/>
      </Box>
    </>
  )
}

export default ProfilePage;

const inactive = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'My Account',
    path: '/account'
  }
]
