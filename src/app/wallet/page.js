import React from 'react'
import { Stack } from '@mui/material';
import BasicBreadcrumbs from '@/components/BreadCrumbs';
import Container from '@/components/Wallet/Container';
const WalletPage = () => {
  return (
    <>
     <BasicBreadcrumbs inactive={inactive} active="Vendor Wallet" fsize="25px"/>
     <Container/>
    </>
  )
}

export default WalletPage;

const inactive=[
  {
  title:"Home",
  path:'/'
  }
]