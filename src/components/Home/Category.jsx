import { useState } from "react";
import styles from './home.module.css';
import { Stack, Typography } from "@mui/material";

const Category = ({data}) => {
    const [select, setSelect]=useState(0);

    return (
        <Stack direction={"row"} gap={10}>
            {data.map((title, index) => (
                <Typography key={index} onClick={()=>setSelect(index)} className={select===index?styles.catTitle:""} sx={{cursor: "pointer"}}>
                    {title}
                </Typography>
            ))}
        </Stack>
    )
}

export default Category;