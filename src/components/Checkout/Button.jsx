"use client";
import React, { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styles from "./checkout.module.css";
import Strip from "../Cart/Strip";
import PlacedPopup from "./PlacedPopup";
import { RazorCheckout } from "@/Redux/Features/checkout/RazorPay";
import { getProfile } from "@/Redux/Features/profile/profileSlice";
import { getCart } from "@/Redux/Features/cart/cartSlice";

const CheckoutButton = () => {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile.profile);
  const getCartState = useSelector((state) => state.cart.cart);

  const [states, setState] = useState(profileState);
  const [cartStates, setCartState] = useState(getCartState);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    setState(profileState);
  }, [profileState]);
  useEffect(() => {
    setCartState(getCartState);
  }, [getCartState]);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userDetails = {
    firstName: profileState?.firstName || "",
    phoneNumber: profileState?.phoneNumber || "",
  };
  console.log(userDetails);

  const handlePlaceOrder = async () => {
    const pricingData = {
      subTotal: 50000,
      tax: 500,
    };
    const id = getCartState.id;

    if (!profileState) {
      console.error("Profile data is not available.");
      return;
    }

    try {
      await RazorCheckout(pricingData, id, userDetails);
      handleOpen();
    } catch (error) {
      console.error("Failed to initiate Razorpay payment:", error);
    }
  };

  return (
    <Stack style={{ width: "100%" }}>
      <Button
        variant="contained"
        className={styles.button}
        onClick={handlePlaceOrder}
      >
        PLACE YOUR ORDER
      </Button>
      <Strip />
      <PlacedPopup open={open} handleClose={handleClose} />
    </Stack>
  );
};

export default CheckoutButton;
