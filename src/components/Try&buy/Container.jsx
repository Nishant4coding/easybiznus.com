'use client'
import React from 'react';
import { Stack, Typography } from '@mui/material';
import styles from './try.module.css';
import Card from '../CardF/Card';

const Container = () => {
  return (
    <Stack>
        <Typography className={styles.heading}>Try And Buy Bag</Typography>
        <Stack gap={3}>
        {
            cradArray.map((item)=>(
                <Card key={item}/>
            ))
        }
        </Stack>
    </Stack>
  )
}

export default Container;

const cradArray=[1,2,3];
