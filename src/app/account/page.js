"use client"
import BasicBreadcrumbs from '@/components/BreadCrumbs'
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import NewAccount from '@/components/Account/NewAccount';
import Footer from '@/components/Footer/Footer';
import AccountView from '@/components/Account/AccountView';
import AccountMobile from '@/components/Account/Mobile/Account';
import global from '@/global.module.css';

const Account = () => {
  // const [form, setForm] = useState(true);
  return (
    <>
      <Box className={global.desktop}>
        <BasicBreadcrumbs inactive={inactive} active="My Account" fsize={"22px"} mt={"20px"} />
        <Stack sx={{ width: '80%', margin: '10px auto', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '50px', fontWeight: '700', textAlign: 'center', marginBottom: '30px' }}>My Account</Typography>
          {false ?
            // <NewAccount setForm={setForm} /> : <AccountView />
            <NewAccount /> : <AccountView />
          }
        </Stack>
        <Footer />
      </Box>

      <Box className={global.mobile} style={{ padding:'120px 15px 15px 15px', backgroundColor:'#EFEFEF'}}>
          <AccountMobile/>
      </Box>
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
