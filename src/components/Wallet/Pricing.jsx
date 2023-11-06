import React from 'react'
import { Stack, Typography } from '@mui/material';
import styles from './wallet.module.css';

const Pricing = () => {
    return (
        <Stack className={styles.pricing}>
            <Stack gap={3}>
                <Typography>Total Balane</Typography>
                <Typography sx={{ color: '#999999' }}>Total Balane</Typography>
                <Typography sx={{ color: '#999999' }}>Refund Money</Typography>
            </Stack>
            <Stack gap={3} sx={{alignItems:'flex-end'}}>
                <Typography sx={{display:'flex', gap:"4px"}}>₹
                    <Typography sx={{ color: '#1BCFB4'}}>0.0</Typography>
                </Typography>
                <Typography sx={{ color: '#999999' }}>0.0</Typography>
                <Typography sx={{ color: '#999999' }}>0.0</Typography>
            </Stack>
        </Stack>
    )
}

export default Pricing
