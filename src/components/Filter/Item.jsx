import { Box, Typography } from "@mui/material";
import styles from './filter.module.css';
import { ArrowDown, Check } from '@/assets/svg/index';
import Image from "next/image";
import { useState } from "react";

const Item = ({ data, updateFilter }) => {
    const { title } = data;
    const [select, setSelect] = useState(false);

    // update the filter based on the selected item and its dropdown 

    return (
        <Box className={[styles.dropdown, select ? styles.selected : '']} onClick={() => setSelect(!select)}>
            {select && <Image src={Check} alt={'check'} width={12} />}
            <Typography className={styles.text}>{title}</Typography>
            <Image src={ArrowDown} alt={"arrow"} />
        </Box>
    )
}

export default Item;