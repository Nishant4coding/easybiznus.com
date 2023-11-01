import { Stack, Typography } from "@mui/material";
import Category from "../Category";
import styles from '../home.module.css';
import Products from "./Products";

const Brand = () => {
    return (
        <Stack direction={"column"} className={styles.container} gap={3}>
            <Typography className={styles.title}> Brand </Typography>
            <Category data={catArray} />
            <Products/>
        </Stack>
    )
}

export default Brand;

const catArray = [
    "NATIONAL",
    "INTERNATIONAL",
    "LOCAL"
];

