'use client';
import { Img1, Img2, Img3, Img4, Img5, Img6 } from '@/assets/svg/index';
import { Box, Grid, Stack } from '@mui/material';
import Image from 'next/image';
import styles from './product.module.css';
import { useState } from 'react';

const ImageGrid = () => {
    const [mainImg, setMainImg]= useState(Img1);

    return (
        <Stack style={{width:'100%'}} direction={"row"} gap={0.5}>
            <Stack gap={0.5}>
                {
                    imgArray.map((item, index) => (
                        <Box key={index} className={styles.imgGrid} onClick={()=>setMainImg(item)}>
                            <Image alt="prod-image" src={item} className={styles.img}></Image>
                        </Box>
                    ))
                }
            </Stack>
            <Box className={styles.mainImg}>
                <Image alt="product" src={mainImg} className={styles.img}></Image>
            </Box>

            {/* OLD STYLE */}
            {/* <Grid container className={styles.imgGrid} spacing={2}>
            {
                imgArray.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Image src={item} alt={"product-image"} className={styles.image}/>
                    </Grid>
                ))
            }
        </Grid> */}
        </Stack>
    )
}

export default ImageGrid;

const imgArray = [
    Img1, Img2, Img3, Img4, Img5, Img6
]