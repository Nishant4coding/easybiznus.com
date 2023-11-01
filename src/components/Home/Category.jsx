import { useState } from "react";
import styles from './home.module.css';
import { Stack, Typography } from "@mui/material";

const Category = ({data}) => {
    const [select, setSelect]=useState(0);

    return (
        <Stack direction={"row"} gap={10}>
            {/* {data.map((title, index) => ( */}
                <Typography onClick={()=>setSelect(index)} className={select===true?styles.catTitle:""} sx={{cursor: "pointer"}}>
                    {data[0]}
                </Typography>
            {/* ))} */}
        </Stack>
    )
}

export default Category;