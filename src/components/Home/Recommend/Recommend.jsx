import { Stack, Typography } from "@mui/material";
import styles from '../home.module.css';
import Products from "../Products";

const Trend = () => {
    return (
        <Stack direction={"column"} className={styles.container} gap={3} sx={{backgroundColor:"#FFFAF8"}}>
            <Typography className={styles.title}>Recommended Products</Typography>
            <Products/>
        </Stack>
    )
}

export default Trend;
