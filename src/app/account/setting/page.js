import React from 'react'
import { Box } from '@mui/material';
import global from '@/global.module.css';
import Setting from '@/components/Account/Mobile/Setting';

const page = () => {
    return (
        <>
            <Box className={global.mobile} style={{minHeight:'100vh', padding:'120px 15px 15px 15px', backgroundColor:'#EFEFEF'}}>
                <Setting/>
            </Box>
        </>
    )
}

export default page
