import { Box, Typography } from "@mui/material";
import styles from './filter.module.css';
import {ArrowDown, Check} from '@/assets/svg/index';
import Image from "next/image";
import { useState } from "react";

const Item = ({data})=>{
    const {title}=data;
    const [select, setSelect]=useState(false);

    return(
        <Box className={[styles.dropdown,select?styles.selected:'']} onClick={()=>setSelect(!select)}>
            {select&& <Image src={Check} alt={'check'} width={12}/>}
            <Typography className={styles.text}>{title}</Typography>
            ArrowDown}/>
        </Box>
    )
}

export default Item;