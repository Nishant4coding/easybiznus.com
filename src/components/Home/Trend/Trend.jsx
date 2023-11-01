import { Stack, Typography } from "@mui/material";
import Category from "../Category";
import styles from '../home.module.css';
import Products from "../Products";

const Trend = () => {
    return (
        <Stack direction={"column"} className={styles.container} gap={3}>
            <Typography className={styles.title}> Our Trendy Products</Typography>
            <Category data={catArray} />
            <Products/>
        </Stack>
    )
}

export default Trend;

const catArray = [
    "FOOTBALL SHOES",
    "CROCS",
    "MOCCASINS",
    "SNEAKERS"
];

