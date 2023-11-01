import { Img1, Img2, Img3, Img4, Img5, Img6 } from '@/assets/svg/index';
import { Grid } from '@mui/material';
import Image from 'next/image';
import styles from './product.module.css';

const ImageGrid = () => {
    return (
        <Grid container className={styles.imgGrid} spacing={2}>
            {
                imgArray.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Image src={item} className={styles.image}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default ImageGrid;

const imgArray = [
    Img1, Img2, Img3, Img4, Img5, Img6
]