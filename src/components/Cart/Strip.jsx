import { Box, Stack, Typography } from "@mui/material";
import styles from './cart.module.css';
import { Return, Car, Card } from "@/assets/svg/index";
import Image from "next/image";

const Strip = () => {
    return (
        <Stack direction={"row"} sx={{marginTop:"30px", justifyContent:"center"}} gap={3}>
            <Stack direction={"row"} sx={{alignItems:"center"}} gap={1}>
                <Image src={Return} width={30}/>
                <Stack>
                    <Typography className={styles.striplabel}>Returnable</Typography>
                    <Typography className={styles.substriplabel}>Easy Refund</Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} sx={{alignItems:"center"}} gap={1}>
                <Image src={Card} width={30}/>
                <Stack>
                    <Typography className={styles.striplabel}>Secure Pay</Typography>
                    <Typography className={styles.substriplabel}>Safe Money</Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} sx={{alignItems:"center"}} gap={1}>
                <Image src={Car} width={30}/>
                <Stack>
                    <Typography className={styles.striplabel}>Fastest Delivery</Typography>
                    <Typography className={styles.substriplabel}>Get Instant</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Strip;