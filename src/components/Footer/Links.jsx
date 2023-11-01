import { Stack } from "@mui/material";
import Link from "next/link";
import styles from './footer.module.css';

const Links = ({data})=>{
    return(
        <Stack direction={"column"}  gap={2}>
            {
                data.map((item,index)=>(
                    <Link key={index} href={item.path} className={styles.links}>{item.title}</Link>
                ))
            }
        </Stack>
    )
}

export default Links;