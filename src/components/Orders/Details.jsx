'use client';
import { Stack, Typography } from "@mui/material";
import styles from './order.module.css';
import Card from "../CardF/Card";
import { IonIcon } from "@ionic/react";
import { helpCircleOutline } from "ionicons/icons";
import VerticalLinearStepper from "./Stepper";
import Adress from "./Address";
import Summary from "./OrderSummary";
import Return from "@/components/Orders/Return";

const Details = () => {
    return (
        <Stack className={styles.details}>
            <Typography className={styles.heading}>Orders Details</Typography>
            <Typography className={styles.help}>
                <IonIcon icon={helpCircleOutline} style={{ fontSize: "18px" }}></IonIcon>
                Need help?
            </Typography>
            <Card refundable={"₹19,990"} action={true}/>
            <Stack direction={"row"} sx={{ justifyContent: 'space-between', paddingTop: '30px' }}>
                <VerticalLinearStepper />
                <Stack style={{ width: '40%' }}>
                    <Adress />
                    <Summary />
                </Stack>
            </Stack>
            <Return />
        </Stack>
    )
}

export default Details;