import { Stack, Typography } from "@mui/material";
import styles from '../home.module.css';
import Category from "./Category";

const Main = () => {
    return (
        <Stack direction={"column"} className={styles.container} gap={3} sx={{backgroundColor:"#FFFAF8"}}>
            <Typography className={styles.title}>Main</Typography>
            <Category/>
        </Stack>
    )
}

export default Main;
