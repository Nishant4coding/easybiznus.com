import { Box } from "@mui/material";
import styles from './carousel.module.css';
import Image from "next/image";

const CarouselMob = ({img}) => {
    return (
        <Box className={styles.container}>
            <Image src={img}
                alt={"carousel-image"}
                className={styles.image}
                style={{
                    objectFit: 'cover',
                    marginBottom:10
                }} />
        </Box>
    )
}

export default CarouselMob;