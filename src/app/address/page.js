"use client"
import BasicBreadcrumbs from '@/components/BreadCrumbs'
import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import NewAddress from '@/components/Account/NewAddress';
import Footer from '@/components/Footer/Footer';

const AddressPage = () => {
  return (
    <>
      <BasicBreadcrumbs inactive={inactive} active="Address Book" fsize={"22px"} mt={"20px"} />
      <Stack sx={{ width: '80%', margin: '10px auto', alignItems: 'center'}}>
        <Typography sx={{ fontSize: '50px', fontWeight: '700', textAlign: 'center', marginBottom: '30px' }}>Address Book</Typography>
          <NewAddress/>
      </Stack>
      <Footer />
    </>
  )
}

export default AddressPage;

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
