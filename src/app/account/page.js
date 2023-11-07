"use client"
import BasicBreadcrumbs from '@/components/BreadCrumbs'
import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import NewAccount from '@/components/Account/NewAccount';
import Footer from '@/components/Footer/Footer';
import AccountView from '@/components/Account/AccountView';

const Account = () => {
  const [form, setForm] = useState(true);
  return (
    <>
      <BasicBreadcrumbs inactive={inactive} active="My Account" fsize={"22px"} mt={"20px"} />
      <Stack sx={{ width: '80%', margin: '10px auto', alignItems: 'center'}}>
        <Typography sx={{ fontSize: '50px', fontWeight: '700', textAlign: 'center', marginBottom: '30px' }}>My Account</Typography>
        {false ?
          <NewAccount setForm={setForm}/> : <AccountView/>
        }
      </Stack>
      <Footer />
    </>
  )
}

export default Account;

const inactive = [
  {
    title: 'Home',
    path: '/'
  }
]
