'use client'
import { Box, Stack } from "@mui/material";
import styles from './filter.module.css';
import Image from "next/image";
import { Filter } from '@/assets/svg/index';
import Item from "./Item";

const FilterBar = ({ sort, filterFromUI, setFilterFromUI }) => {
    const updateFilter = (data) => {
        setFilterFromUI(data)
    }
    return (
        <Box className={styles.filter}>
            <Stack direction={"row"} gap={3} sx={{ justifyContent: "flex-start" }}>
                <Image src={Filter} alt={"filter"} width={17} />
                {
                    filterArray.map((item, index) => (
                        <Item key={index} data={item} updateFilter={updateFilter} />
                    ))
                }
            </Stack>
            {sort && <Item data={{ title: "Sort By" }} />}
        </Box>
    )
}


const filterArray = [
    {
        title: "Category"
    },
    {
        title: "Product Type"
    },
    {
        title: "Price"
    },
    {
        title: "Gender"
    },
    {
        title: "Size"
    },
    {
        title: "Color"
    },
    {
        title: "Discount"
    },
    {
        title: "Activity"
    }
]


export default FilterBar;
