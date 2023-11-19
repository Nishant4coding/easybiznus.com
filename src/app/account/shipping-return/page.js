import React from 'react'
import global from '@/global.module.css';
import { Box } from '@mui/material';
import Shipping from '@/components/Account/Mobile/Shipping';

const page = () => {
  return (
    <>
      <Box className={global.mobile} style={{minHeight:'100vh', padding:'120px 15px 15px 15px'}}>
            <Shipping/>
      </Box>
    </>
  )
}

export default page
