import BasicBreadcrumbs from '@/components/BreadCrumbs';
import Footer from '@/components/Footer/Footer';
import Transaction from '@/components/Wallet/Transaction';
import React from 'react'

const WalletTransaction = () => {
  return (
    <>
    <BasicBreadcrumbs inactive={inactive} active="Vendor Wallet" fsize="25px"/>
    <Transaction/>
    <Footer/>
    </>
  )
}

export default WalletTransaction;

const inactive=[
  {
  title:"Home",
  path:'/'
  }
]
