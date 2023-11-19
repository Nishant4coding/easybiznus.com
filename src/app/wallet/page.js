import React from 'react'
import Footer from '@/components/Footer/Footer';
import BasicBreadcrumbs from '@/components/BreadCrumbs';
import Container from '@/components/Wallet/Container';
import { Box } from '@mui/material';
import global from '@/global.module.css';
import { logoTableau } from 'ionicons/icons';
import Wallet from '@/components/Wallet/Mobile/Wallet';

const WalletPage = () => {
  return (
    <>
      <Box className={global.desktop}>
        <BasicBreadcrumbs inactive={inactive} active="Vendor Wallet" fsize="25px" />
        <Container />
        <Footer />
      </Box>

      {/* MOBILE */}
      <Box className={global.mobile} sx={{marginTop:'60px', padding:'15px'}}>
          <Wallet/>
      </Box>
    </>
  )
}

export default WalletPage;

const inactive = [
  {
    title: "Home",
    path: '/'
  }
]