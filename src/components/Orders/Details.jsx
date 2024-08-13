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

const Details = ({ stepper,rtrn, bill,data }) => {

    console.log("details",data.length)
    return (
        <Stack className={styles.details}>
            <Typography className={styles.heading}>Orders Details</Typography>
            <Typography className={styles.help}>
                <IonIcon icon={helpCircleOutline} style={{ fontSize: "18px" }}></IonIcon>
                Need help?
            </Typography>
            <Stack direction={"row"}>
                {data.map((item, index) => (
                    <Card key={index} refundable={item.refundable} action={item.action} data={item.data} />
                ))}
            </Stack>
            <Card refundable={"₹19,990"} action={true} data={data}/>
            
            <Stack direction={"row"} sx={{ justifyContent: 'space-between', paddingTop: '30px' }}>
                {stepper&&<VerticalLinearStepper title={true} steps={steps} />}
                {bill&&
                    <Stack style={{ width: '40%' }}>
                    <Adress />
                    <Summary />
                </Stack>
}
            </Stack>
            {rtrn && <Return />}
        </Stack>
    )
}

export default Details;


const steps = [
    {
        label: 'Order Confirmed',
        description: `The Order has been successfully confirmed by our system`,
        date: `Nov 14, 10:25`,
        active: true,
    },
    {
        label: 'Dispatched',
        description: `All items from your order were picked and Dispatched`,
        date: `Nov 14, 12:25`,
        active: true,
    },
    {
        label: 'Out for Delivery',
        description: `Our Courier is coming to your address`,
        date: `Nov 15, 04:25`,
        active: true,
    },
    {
        label: 'On the Way',
        date: `Estimate delivery by Nov 17`,
        active: false,
    },
];