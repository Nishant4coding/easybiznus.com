"use client";
import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import styles from "./checkout.module.css";
import Strip from "../Cart/Strip";
import PlacedPopup from "./PlacedPopup";
import BASE_URL from "@/Utility/baseUrl";
import axios from "axios";

const CheckoutButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /*Payment Flow*/
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const checkoutHandler = async (amount) => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const {
      data: { key },
    } = await axios.get(`${BASE_URL}/order/getkey`);

    const {
      data: { orders },
    } = await axios.post(
      `${BASE_URL}/order/createOrder`,
      {
        cartId: "1a7c1abb-b9c3-44bb-a287-941dbcfc6795",
      },
      {
        headers: {
          // Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3MmQyMmI2LTI0NzktNDdjNi05MDMxLWY4NGE0ZjdjNDFmOSIsImVtYWlsIjoicm9oYTEyMUBnbWFpbC5jb20iLCJyb2xlIjoid2hvbGVzYWxlciIsImlhdCI6MTcwNTc0Njc1MX0.1hhR-vi4B3jSvgNXAstiiGUUgRSDOIls7mr2y19Vo5A,
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4N2M1YzczLWYzMmQtNGEzZC1hOGQ5LWM2NmJkYjg0MTM3YyIsImVtYWlsIjoiYWJjZGVmZ0BnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcwODcwMzgwMH0.nCePWgqDskWNyezezXiQCkOrZIsp5iP8me1vAyruC-I'  // Add any other headers if needed
        },
      }
    );

    console.log({ key, orders });
    const options = {
      key,
      amount: orders.amount,
      currency: "INR",
      name: "6 Pack Programmer",
      description: "Tutorial of RazorPay",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: orders.id,
      callback_url: "http://localhost:4000/api/order/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      handler: async function (response) {
        // Handle success
        console.log("Payment success:", response);
        const res = await axios.post(
          `${BASE_URL}/order/paymentverification`,
          {
            ...response,
          },
          {
            headers: {
              Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4N2M1YzczLWYzMmQtNGEzZC1hOGQ5LWM2NmJkYjg0MTM3YyIsImVtYWlsIjoiYWJjZGVmZ0BnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcwODcwMzgwMH0.nCePWgqDskWNyezezXiQCkOrZIsp5iP8me1vAyruC-I' // Add any other headers if needed
            },
          }
        );
        // response
        console.log({ res: res.data });
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    console.log({ orders });
    const razor = new window.Razorpay(options);
    console.log({ razor });
    razor.open();
  };

  const config = {
    auth: {
      username: "rzp_test_32hsbEKriO6ai4",
      password: "SC6d7z4FcgX2wJj49obRRT4M",
    },
  };

  const account = {
    name: "Gaurav Kumar",
    email: "gaurav.kumar@example.com",
    tnc_accepted: true,
    account_details: {
      business_name: "Acme Corporation",
      business_type: "individual",
    },
    bank_account: {
      bank_account: "HDFC0CAGSBK",
      beneficiary_name: "Gaurav Kumar",
      account_type: "current",
      account_number: 304030434,
    },
  };
  const create = async () => {
    try {
      const response = await axios.post(
        "https://api.razorpay.com/v1/accounts",
        account,
        config
      );
      console.log({ res: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack style={{ width: "100%" }}>
      <Button
        variant="contained"
        className={styles.button}
        onClick={checkoutHandler}
      >
        PLACE YOUR ORDER
      </Button>
      <Strip />
      <PlacedPopup open={open} handleClose={handleClose} />
    </Stack>
  );
};

export default CheckoutButton;
