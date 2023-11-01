import { Box, Typography } from "@mui/material";
import styles from '../home.module.css';
import Image from "next/image";
import {Bg1} from '@/assets/svg/index';

const Banner = ({title})=>{
    return(
        <Box className={styles.banner}>
            <Image src={Bg1} className={styles.bannerimg}/>
            <Typography className={styles.bannertitle}>{title}</Typography>
        </Box>
    )
}

export default Banner;