import Image from 'next/image'
import React from 'react'
import { Product } from '@/assets/svg/index';
import { Box, Typography } from '@mui/material';
import styles from '@/components/ProductPage/product.module.css';

const ImageView = () => {
  return (
    <Box style={{ width: '100%', position: 'relative' }}>
      <Typography className={styles.discount}>-50%</Typography>
      <Image alt="product" src={Product} style={{ width: '100%', objectFit: 'cover' }} />
    </Box>
  )
}

export default ImageView;
