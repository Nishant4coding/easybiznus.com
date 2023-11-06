import {Box, Stack, Typography } from "@mui/material";
import styles from './card.module.css';
import Image from "next/image";

const Card = ({data})=>{
    const { image, title, style } = data;
    
    return(
        <Box className={styles.container}>
            <Image src={image} alt={"product"} className={styles.image} />
            <Stack direction={"row"} className={styles.label}>
                    <Typography className={styles.title}>{title}</Typography>
                    <Typography className={styles.subtitle}> ({style}) </Typography>
            </Stack>
        </Box>
    )
}

export default Card;