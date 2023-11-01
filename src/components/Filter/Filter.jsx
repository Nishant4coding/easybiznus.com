'use client'
import { Box, Stack } from "@mui/material";
import styles from './filter.module.css';
import Image from "next/image";
import { Filter } from '@/assets/svg/index';
import Item from "./Item";

const FilterBar = ({ filterArray, sort }) => {

    return (
        <Box className={styles.filter}>
            <Stack direction={"row"} gap={3} sx={{justifyContent:"flex-start"}}>
                <Image src={Filter} width={17} />
                {
                    filterArray.map((item, index) => (
                        <Item key={index} data={item} />
                    ))
                }
            </Stack>
            {sort && <Item data={{ title: "Sort By" }} />}
        </Box>
    )
}

export default FilterBar;
