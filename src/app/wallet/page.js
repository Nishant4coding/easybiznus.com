import React from 'react'
import Footer from '@/components/Footer/Footer';
import BasicBreadcrumbs from '@/components/BreadCrumbs';
import Container from '@/components/Wallet/Container';
const WalletPage = () => {
  return (
    <>
     <BasicBreadcrumbs inactive={inactive} active="Vendor Wallet" fsize="25px"/>
     <Container/>
     <Footer/>
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