import BasicBreadcrumbs from '@/components/BreadCrumbs';
import Footer from '@/components/Footer/Footer';
import Transaction from '@/components/Wallet/Transaction';
import { Box } from '@mui/material';
import React from 'react'
import global from '@/global.module.css';
import WalletTxn from '@/components/Wallet/Mobile/WalletTxn';

const WalletTransaction = () => {
  return (
    <>
      <Box className={global.desktop}>
        <BasicBreadcrumbs inactive={inactive} active="Vendor Wallet" fsize="25px" />
        <Transaction />
        <Footer />
      </Box>

      <Box className={global.mobile} sx={{marginTop:'60px', padding:'15px'}}>
        <WalletTxn/>
      </Box>
    </>
  )
}

export default WalletTransaction;

const inactive = [
  {
    title: "Home",
    path: '/'
  }
]
