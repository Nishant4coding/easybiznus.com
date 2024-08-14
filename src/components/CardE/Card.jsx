"use client";
import { Stack, Typography } from "@mui/material";
import styles from './card.module.css';
import { IonIcon } from "@ionic/react";
import { ellipse } from "ionicons/icons";
import Image from "next/image";
import Link from "next/link";
import { YellowTick, GreenTick } from "@/assets/svg/index";

const Card = ({ data }) => {
    const {image, title, color, price, deliveryStatus, date } = data.subOrders[0];
    const id=data.id;
    let statusText = "";
    let statusMessage = "";
    let statusColor = "";
    let tickIcon = null;

    if (deliveryStatus === "pending") {
        statusText = "On the Way";
        statusMessage = "Your item is on the way";
        statusColor = "#F9D144"; 
        tickIcon = YellowTick;
    } else if (deliveryStatus === "delivered") {
        statusText = "Delivered";
        statusMessage = "Your item has been delivered";
        statusColor = "#1BCFB4"; 
        tickIcon = GreenTick;
    } else {
        statusText = "Unknown";
        statusMessage = "Status not available";
        statusColor = "#999999"; 
        tickIcon = null;
    }

    const totalPrice = data.subOrders[0].orderItems.reduce((total, item) => {
        return total + parseFloat(item.price);
    }, 0).toFixed(2); 
    console.log("total",totalPrice)

    return (
        <Link href={`/orders/details/${id}`}>
            <Stack direction="row" className={styles.card}>
                <Stack direction={"row"} sx={{ width: "60%", justifyContent: "flex-start" }} gap={1.5}>
                    <Image src={image} alt={"product"} width={170} />
                    <Stack gap={1} style={{ margin: "15px 0px" }}>
                        <Typography className={styles.title}>{title}</Typography>
                        <Typography className={styles.color}>Color: {color}</Typography>
                    </Stack>
                </Stack>
                <Typography className={styles.price} style={{ margin: "15px 0px" }}>₹ {totalPrice}</Typography>
                <Stack style={{ margin: "15px 20px 15px 0px", gap: "1px", width:"170px" }}>
                    <Typography className={styles.status}>
                        <IonIcon icon={ellipse} style={{ color: statusColor }}></IonIcon>
                        {statusText}
                    </Typography>
                    <Typography className={styles.status2}>{date}</Typography>
                    <Typography className={styles.status3}>
                        {tickIcon && <Image src={tickIcon} alt={"check"} width={12} />}
                        {statusMessage}
                    </Typography>
                </Stack>
            </Stack>
        </Link>
    );
}

export default Card;
