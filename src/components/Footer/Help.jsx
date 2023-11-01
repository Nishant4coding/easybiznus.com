import { Stack, Typography } from "@mui/material";
import Links from "./Links";
import styles from './footer.module.css';

const Help = ({data})=>{
    return(
        <Stack direction={"column"} gap={2}>
            <Typography className={styles.heading}>Get Help</Typography>
            <Links data={linkArray}/>
        </Stack>
    )
}

export default Help;

const linkArray=[
    {
        title:"Order Status",
        path:"#"
    },
    {
        title:"Delivery",
        path:"#"
    },
    {
        title:"Returns",
        path:"#"
    },
    {
        title:"Payment Options",
        path:"#"
    },
    {
        title:"Contact Us for Vendor Issues",
        path:"#"
    },
    {
        title:"Contact Us for Customer Issues",
        path:"#"
    },
]