import { Stack, Typography } from "@mui/material";
import Links from "./Links";
import styles from './footer.module.css';
import {Logo} from '@/assets/svg/index';
import Image from "next/image";
import { Facebook,Google,Instagram,Twitter } from "@/assets/svg/index";

const LogoLink = ()=>{
    return(
        <Stack direction={"column"} gap={4} sx={{alignItems:"center"}}>
            <Image src={Logo} alt={"logo"} width={180} style={{margin:"5px 20px"}}/>
            <Stack direction={"row"} sx={{width:"110%", justifyContent:"space-between"}}>
                {logoArray.map((item,index)=>(
                    <Image src={item} key={index}/>
                ))
                }
            </Stack>
        </Stack>
    )
}

export default LogoLink;

const logoArray=[
    Facebook,Google,Instagram,Twitter
]