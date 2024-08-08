import { Stack, Typography } from "@mui/material";
import Category from "../Category";
import styles from '../home.module.css';
import Products from "../Products";
import { useDispatch, useSelector } from "react-redux";

const Try = ({}) => {
    // const dispatch = useDispatch();
    // const dashboardState = useSelector(state => state.dashboard);

    // console.log(dashboardState.dashboardData);
    
    return (
        <Stack direction={"column"} className={styles.container} gap={2.5}>
            {/* <Typography className={styles.title}> TRY & BUY </Typography> */}
            <Category data={catArray} />
            {/* {
                dashboardState.fetchingDashboardData ? (
                    <Typography>Loading...</Typography>
                ) : (
                    <Products prodData={dashboardState.dashboardData}/>
                )
            } */}
            <Products/>
        </Stack>
    )
}

export default Try;

const catArray = [
    "SPORTS SHOES",
    "SANDALS",
    "LOAFERS",
    "SNEAKERS"
];

