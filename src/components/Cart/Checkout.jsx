"use client";
import { checkStock } from "@/Redux/Features/checkout/checkStockSlice";
import { Button, Link, Stack, Typography } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import styles from "./cart.module.css";
import Strip from "./Strip";
import { useRouter } from "next/navigation";

const delivery = 40;

const Checkout = ({ total }) => {
  const router = useRouter();
  const dispatch = useDispatch();


  const handleCheckout = () => {
    dispatch(checkStock()).then((res) => {
      if (res.type === "checkout/checkStock/fulfilled") {
        router.push("/checkout");
      } else {
        toast.error(res?.payload?.message);
      }
    });
  };

  return (
    <Stack
      direction={"column"}
      className={styles.checkout}
      style={{ marginBottom: "30px" }}
    >
      <Stack gap={2} sx={{ marginBottom: "60px" }}>
        <Button variant="outlined" className={styles.outbutton}>
          Return Policy
        </Button>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ justifyContent: "space-between", paddingRight: "20px" }}
      >
        <Stack sx={{ width: "auto", alignItems: "flex-start" }}>
          <Typography className={styles.pricing}>Subtotal</Typography>
          <Typography className={styles.pricing}>Delivery</Typography>
        </Stack>
        <Stack sx={{ width: "auto", alignItems: "flex-end" }}>
          <Typography className={styles.pricing}>₹ {total}</Typography>
          <Typography className={styles.pricing}>₹ {delivery}</Typography>
        </Stack>
      </Stack>
      <Typography className={styles.linebreak}></Typography>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          paddingRight: "20px",
          alignItems: "flex-end",
        }}
      >
        <Typography className={styles.finalpricing}>Grand Total</Typography>
        <Typography className={styles.finalpricing}>
          ₹ {total + delivery}
        </Typography>
      </Stack>
      <Button
        variant="contained"
        className={styles.checkoutbtn}
        onClick={handleCheckout}
      >
        CHECKOUT
      </Button>
      <Strip />
    </Stack>
  );
};

export default Checkout;
