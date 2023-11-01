import { Stack, Typography } from "@mui/material"
import Products from "../Home/Products";
import styles from './cart.module.css';

const Frequent=()=>{
    return(
        <Stack direction={"column"} className={styles.frequent}>
            <Typography className={styles.frequentTitle}>FREQUENTLY BOUGHT WITH ITEMS IN YOUR CART</Typography>
            <Products/>
        </Stack>
    )
}

export default Frequent;