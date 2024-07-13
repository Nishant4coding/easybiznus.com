'use client';
import { Img1, Img2, Img3, Img4, Img5, Img6 } from '@/assets/svg/index';
import { Box, Grid, Stack } from '@mui/material';
import Image from 'next/image';
import styles from './product.module.css';
import { useState } from 'react';

const ImageGrid = ({ image }) => {
    // const [mainImg, setMainImg] = useState(image[0]);
    // const [mainImg, setMainImg] = useState(image);

    return (
        <Stack style={{ width: '100%' }} direction={"row"} gap={0.5}>
            <Stack gap={0.5}>
                {
                    // image.map((item, index) => ( //when images are in array
                        // <Box key={index} className={styles.imgGrid} onClick={() => setMainImg(item)}>
                        <Box  className={styles.imgGrid}>
                            <Image alt="prod-image" src={image} className={styles.img} width={90} height={90}></Image>
                        </Box>
                    // ))
                }
            </Stack>
            <Box className={styles.mainImg}>
                <Image alt="product" src={image} className={styles.img} width={600} height={600}></Image>
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