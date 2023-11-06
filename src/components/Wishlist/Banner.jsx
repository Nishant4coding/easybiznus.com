import { Box, Typography } from "@mui/material";
import styles from '@/components/Home/home.module.css';
import Image from "next/image";
import {Bg2} from '@/assets/svg/index';

const Banner = ({title})=>{
    return(
        <Box className={styles.banner}>
            <Image src={Bg2} alt={"banner"} className={styles.bannerimg}/>
            <Typography className={styles.bannertitle}>{title}</Typography>
        </Box>
    )
}

export default Banner;