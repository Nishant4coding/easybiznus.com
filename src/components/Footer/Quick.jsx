import { Stack, Typography } from "@mui/material";
import Links from "./Links";
import styles from './footer.module.css';

const QuickLink = ({data})=>{
    return(
        <Stack direction={"column"} gap={2}>
            <Typography className={styles.heading}>Quick Links</Typography>
            <Links data={linkArray}/>
        </Stack>
    )
}

export default QuickLink;

const linkArray=[
    {
        title:"Register as Vendor",
        path:"#"
    },
    {
        title:"Send us Feedback",
        path:"#"
    },
]