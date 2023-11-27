import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { heart, heartOutline, add } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import styles from './cardB.module.css';
import Image from "next/image";
import Link from "next/link";

const Card = ({ data, wishIcon }) => {
    const [wish, setWish] = useState(false);
    const { discount, image, title, style, sp, mrp, link } = data;

    return (
        <Box className={styles.container}>
            <Link href={link}>
                <Stack className={styles.discount}>
                    {wishIcon && <IonIcon icon={wish ? heart : heartOutline} size="small" style={{ color: "#F55E53", cursor: "pointer" }}
                        onClick={() => {
                            setWish(!wish);
                            // wish?null: addedToWishlist();
                        }}
                    ></IonIcon>}
                </Stack>
                <Image src={image} alt={"product"} className={styles.image} />
                <Stack direction={"column"} sx={{ justifyContent: "space-between", padding: "10px 10px", backgroundColor: "white", borderRadius: "0 0 10px 10px" }}>
                    <Stack direction={"column"} gap={1}>
                        <Stack>
                            <Typography className={styles.title}>{title}</Typography>
                            <Typography className={styles.subtitle}>Style: {style}</Typography>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography className={styles.sp}>{sp}</Typography>
                            <IonIcon icon={add} className={styles.addIcon} />
                        </Stack>
                    </Stack>
                </Stack>
            </Link>
        </Box>
    )
}

export default Card;