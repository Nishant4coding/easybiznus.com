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
import { checkStock } from "@/Redux/Features/checkout/checkStockSlice";
import toast from "react-hot-toast";

const CheckoutButton = () => {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile.profile);
  const getCartState = useSelector((state) => state.cart.cart);

  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const userDetails = {
    firstName: profileState?.firstName || "",
    phoneNumber: profileState?.phoneNumber || "",
  };

  const handleCheckout = async () => {
    try {
      const response = await dispatch(checkStock()).unwrap();
      if (response.status === 200) {
        return 200;
      } else {
        toast.error("Some items in your cart have insufficient stock.");
        return response.status;
      }
    } catch (error) {
      console.error("Error checking stock:", error);
      toast.error("Failed to check stock. Please try again later.");
      return 500; 
    }
  };

  const handlePlaceOrder = async () => {
    const total = getCartState.items
      .map((ele) => parseFloat(ele.salePrice * ele.quantity))
      .reduce((partialSum, a) => partialSum + a, 0);

    const pricingData = {
      subTotal: total,
      tax: 500,
    };
    const id = getCartState.id;

    if (!profileState) {
      console.error("Profile data is not available.");
      return;
    }

    try {
      await RazorCheckout(pricingData, id, userDetails, () => {
        setOpen(true);
        setIsPaymentSuccessful(true);
      });
    } catch (error) {
      console.error("Failed to initiate Razorpay payment:", error);
      toast.error("Failed to initiate payment. Please try again later.");
    }
  };

  return (
    <>
      <Stack style={{ width: "100%" }}>
        <Button
          variant="contained"
          className={styles.button}
          onClick={async () => {
            const status = await handleCheckout();
            if (status === 200) {
              handlePlaceOrder();
            } else {
              alert("Some items in your cart have insufficient stock.");
            }
          }}
          >
          PLACE YOUR ORDER
        </Button>
        <Strip />
      </Stack>
      <PlacedPopup
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default CheckoutButton;
