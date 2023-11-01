import { Box } from "@mui/material";
import styles from './carousel.module.css';
import Image from "next/image";
import { Img1 } from '@/assets/carousel/index';

const Carousel = () => {
    return (
        <Box className={styles.container}>
            <Image src={Img1}
                className={styles.image}
                style={{
                    objectFit: 'cover',
                }} />
        </Box>
    )
}

export default Carousel;