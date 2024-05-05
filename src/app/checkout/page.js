import React from 'react'
import { Stack, Typography } from '@mui/material'
import LeftBox from '@/components/Checkout/LeftBox'
import Footer from '@/components/Footer/Footer'
import RightSide from '@/components/Checkout/RightSide'
import styles from '@/components/Checkout/checkout.module.css';
import BasicBreadcrumbsB from '@/components/BreadCrumbsB';
import global from '@/global.module.css'
import PaymentOpt from '@/components/MobileView/Cart/PaymentOpt'


//Hello demo
const CheckoutPage = () => {
  return (
    <>
      <Stack className={global.desktop}>
        <BasicBreadcrumbsB inactive={breadcrumbArray} fsize={"13px"} active="SUMMARY" mt={"10px"} />
        <Typography className={styles.heading} style={{ paddingLeft: '100px', letterSpacing: '1.2px' }}>CHECKOUT</Typography>
        <Stack direction={"row"} style={{ padding: '10px 80px', justifyContent: 'space-around' }}>
          <LeftBox />
          <RightSide />
        </Stack>
        <Footer />
      </Stack>

      <Stack className={global.mobile}>
        <PaymentOpt />
      </Stack>
    </>
  )
}

export default CheckoutPage;

const breadcrumbArray = [
  {
    title: "CART",
    path: '#'
  },
  {
    title: "SHIPPING",
    path: '#'
  },
  {
    title: "PAYMENT",
    path: '#'
  }
]