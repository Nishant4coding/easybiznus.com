import { Stack, Typography } from "@mui/material";
import Card from "../CardD/Card";
import styles from './wishlist.module.css';

const Container=()=>{
    return(
        <Stack direction={"column"} className={styles.container} gap={3}>
            <Typography className={styles.title}>MY WISHLIST {prodArray&&`[ ${prodArray.length} ]`}</Typography>
                <Stack direction={"column"} gap={1.8}>
            {
                prodArray.map((item,index)=>(
                    <Card data={item} key={index}/>
                ))
            }
                </Stack>

        </Stack>
    )
}

export default Container;

const prodArray=[
    {
        title:"Mercedes AMG Petronas F1, Wired Run Unisex Sneakers",
        color:"Warm White Inky-Blue",
        size:"8",
        sku_code:"99845_01",
        price:"₹15,990",
    },
    {
        title:"Mercedes AMG Petronas F1, Wired Run Unisex Sneakers",
        color:"Warm White Inky-Blue",
        size:"8",
        sku_code:"99845_01",
        price:"₹15,990",
    }
]