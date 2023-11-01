import { Stack, Typography } from "@mui/material";
import Category from "../Category";
import styles from '../home.module.css';
import Products from "../Products";

const Try = () => {
    return (
        <Stack direction={"column"} className={styles.container} gap={2.5}>
            <Typography className={styles.title}> TRY & BUY PRODUCTS</Typography>
            <Category data={catArray} />
            <Products/>
        </Stack>
    )
}

export default Try;

const catArray = [
    "BOOTS",
    "SANDALS",
    "LOAFERS",
    "SNEAKERS"
];

