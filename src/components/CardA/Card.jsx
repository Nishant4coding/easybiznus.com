import {Box, Stack, Typography } from "@mui/material";
import styles from './card.module.css';
import Image from "next/image";
import Link from "next/link";

const Card = ({data})=>{
    const {discount, image, title, style, sp, mrp, link} = data;
    
    return(
        <Box className={styles.container}>
            <Link href={link}>
            <Typography className={styles.discount}>{discount}</Typography>
            <Image src={image} alt={"product"} className={styles.image}/>
            <Stack direction={"row"} sx={{justifyContent:"space-between", marginTop:"20px", padding:"0 10px"}}>
                <Stack direction={"column"}>
                    <Typography className={styles.title}>{title}</Typography>
                    <Typography className={styles.subtitle}>Style: {style}</Typography>
                </Stack>
                <Stack direction={"column"} sx={{alignItems:"center"}} gap={0}>
                    <Typography className={styles.sp}>{sp}</Typography>
                    <Box>
                        <Typography className={styles.mrp}>{mrp}</Typography>
                        <Typography className={styles.cutline}></Typography>
                    </Box>
                </Stack>
            </Stack>
            </Link>
        </Box>
    )
}

export default Card;