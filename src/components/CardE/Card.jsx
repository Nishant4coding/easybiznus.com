"use client";
import { Stack, Typography } from "@mui/material";
import styles from './card.module.css';
import { IonIcon } from "@ionic/react";
import { ellipse } from "ionicons/icons";
import Image from "next/image";
import Link from "next/link";
import { YellowTick, GreenTick } from "@/assets/svg/index";

const Card = ({data}) => {
    const {id, image,title,color,price,status,date}=data;
    return (
        <Link href={`/orders/${id}`}>
            <Stack direction="row" className={styles.card}>
                <Stack direction={"row"} sx={{ width: "60%", justifyContent: "flex-start" }} gap={1.5}>
                    <Image src={image} alt={"product"} width={170} />
                    <Stack gap={1} style={{ margin: "15px 0px" }}>
                        <Typography className={styles.title}>{title}</Typography>
                        <Typography className={styles.color}>Color: {color}</Typography>
                    </Stack>
                </Stack>
                <Typography className={styles.price} style={{ margin: "15px 0px" }}>₹ {price}</Typography>
                <Stack style={{ margin: "15px 20px 15px 0px", gap: "1px", width:"170px" }} >
                    <Typography className={styles.status}>
                        {status === 0 ?
                            <IonIcon icon={ellipse} style={{ color: "#F9D144" }}></IonIcon> :
                            <IonIcon icon={ellipse} style={{ color: "#1BCFB4" }}></IonIcon>
                        }
                        {status === 0 ? "On the Way" : "Delivered"}
                    </Typography>
                    <Typography className={styles.status2}>{date}</Typography>
                    <Typography className={styles.status3}>
                        {status === 0 ?
                            <Image src={YellowTick} alt={"check"} width={12} /> :
                            <Image src={GreenTick} alt={"check"} width={12} />
                        }
                        {status === 0 ?"Your Item is on the way":"Your Item has been delivered"}
                    </Typography>
                </Stack>
            </Stack>
        </Link>
    )
}

export default Card;
