import { Box, Typography } from "@mui/material";
import { Pin } from '@/assets/svg/index';
import Image from "next/image";
import styles from "./nav.module.css";
import { useState } from "react";

const Location = () => {
    const [pin, setPin] = useState(true);
    const [pinValue, setPinValue] = useState("201009");

    return (
        <Box className={styles.location}>
            <Image src={Pin} alt={"pin"} height={13}></Image>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Box sx={{display:"flex", gap:"0px", flexDirection:"column", width:"90px"}}>
                    <Typography className={styles.locText}>Location</Typography>
                    {pin ?
                        <Typography className={styles.city} >Ghaziabad ({pinValue})</Typography> : 
                        <input className={styles.locInput} value={pinValue} onChange={(e)=>setPinValue(e.target.value)}></input>
                    }
                </Box>
                <Box sx={{ width: "60px", textAlign: "center" }}>
                    {pin ?
                        <Typography sx={{ color: "#F55E53", fontWeight: "700", cursor: "pointer", fontSize:"12px" }} onClick={() => setPin(false)}>Change</Typography> :
                        <Typography sx={{ color: "#1BCFB4", fontWeight: "700", cursor: "pointer", fontSize:"12px",}} onClick={() => setPin(true)}>OK</Typography>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Location;
