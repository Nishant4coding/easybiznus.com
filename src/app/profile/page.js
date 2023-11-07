"use client"
import BasicBreadcrumbs from '@/components/BreadCrumbs'
import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer';
import Profile from '@/components/Account/Profile';

const ProfilePage = () => {
  return (
    <>
      <BasicBreadcrumbs inactive={inactive} active="My Profile" fsize={"22px"} mt={"20px"} />
      <Stack sx={{ width: '80%', margin: '10px auto', alignItems: 'center'}}>
        <Typography sx={{ fontSize: '50px', fontWeight: '700', textAlign: 'center', marginBottom: '30px' }}>My Profile</Typography>
          <Profile/>
      </Stack>
      <Footer />
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
