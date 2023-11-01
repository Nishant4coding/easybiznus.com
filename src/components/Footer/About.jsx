import { Stack, Typography } from "@mui/material";
import Links from "./Links";
import styles from './footer.module.css';

const About = ({data})=>{
    return(
        <Stack direction={"column"} gap={2}>
            <Typography className={styles.heading}>About</Typography>
            <Links data={linkArray}/>
        </Stack>
    )
}

export default About;

const linkArray=[
    {
        title:"News",
        path:"#"
    },
    {
        title:"Career",
        path:"#"
    },
    {
        title:"Investors",
        path:"#"
    },
]