"use client";
import { Button, Stack, Typography } from "@mui/material";
import styles from './cart.module.css';
import { IonIcon } from "@ionic/react";
import { caretDownOutline } from "ionicons/icons";
import Strip from "./Strip";
import Link from "next/link";

const Checkout = () => {
    return (
        <Stack direction={"column"} className={styles.checkout} style={{ marginBottom: "30px" }}>
            <Stack gap={2} sx={{ marginBottom: "60px" }}>
                <Button variant="outlined" className={styles.outbutton}>Return Policy</Button>
                <Button variant="contained" className={styles.promobtn}>
                    APPLY A PROMO CODE
                    <IonIcon icon={caretDownOutline}></IonIcon>
                </Button>
            </Stack>
            <Stack direction={"row"} sx={{ justifyContent: "space-between", paddingRight: "20px", }}>
                <Stack sx={{ width: "auto", alignItems: "flex-start" }}>
                    <Typography className={styles.pricing}>Subtotal</Typography>
                    <Typography className={styles.pricing}>Delivery</Typography>
                </Stack>
                <Stack sx={{ width: "auto", alignItems: "flex-start" }}>
                    <Typography className={styles.pricing}>₹ 15,990</Typography>
                    <Typography className={styles.pricing}>₹ 40</Typography>
                </Stack>
            </Stack>
            <Typography className={styles.linebreak}></Typography>
            <Stack direction={"row"} sx={{ justifyContent: "space-between", paddingRight: "20px", }}>
                <Typography className={styles.finalpricing}>Grand Total</Typography>
                <Typography className={styles.finalpricing}>₹ 16,030</Typography>
            </Stack>
            <Button variant="contained" className={styles.checkoutbtn}>
                <Link href="/checkout" style={{ width: '100%', height: '100%',borderRadius: '5px', padding:'7px 0' }}>
                    CHECKOUT
                </Link>
            </Button>
            <Strip />
        </Stack>
    )
}

export default Checkout;