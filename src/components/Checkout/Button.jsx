// "use client";
// import React, { useState } from "react";
// import { Button, Stack } from "@mui/material";
// import styles from "./checkout.module.css";
// import Strip from "../Cart/Strip";
// import PlacedPopup from "./PlacedPopup";
// import BASE_URL from "@/Utility/baseUrl";
// import axios from "axios";

// const CheckoutButton = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   // Payment Flow
//   const initializeRazorpay = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";

//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };

//       document.body.appendChild(script);
//     });
//   };

//   const checkoutHandler = async () => {
//     const res = await initializeRazorpay();

//     if (!res) {
//       alert("Razorpay SDK failed to load");
//       return;
//     }

//     try {
//       const {
//         data: { key },
//       } = await axios.get(`${BASE_URL}/order/getkey`);

//       const {
//         data: { orders },
//       } = await axios.post(
//         `${BASE_URL}/order/createOrder`,
//         { cartId: "1a7c1abb-b9c3-44bb-a287-941dbcfc6795" },
//         {
//           headers: {
//             Authorization: 'your-auth-token' // Replace with your actual auth token
//           },
//         }
//       );

//       const options = {
//         key,
//         amount: orders.amount,
//         currency: "INR",
//         name: "Your Company Name",
//         description: "Product Purchase",
//         image: "https://your-logo-url.com/logo.png",
//         order_id: orders.id,
//         callback_url: `${BASE_URL}/order/paymentverification`,
//         prefill: {
//           name: "Customer Name",
//           email: "customer.email@example.com",
//           contact: "9999999999",
//         },
//         handler: async function (response) {
//           try {
//             const verificationResponse = await axios.post(
//               `${BASE_URL}/order/paymentverification`,
//               { ...response },
//               {
//                 headers: {
//                   Authorization: 'your-auth-token' // Replace with your actual auth token
//                 },
//               }
//             );

//             console.log("Payment success:", verificationResponse.data);
//             handleOpen();
//           } catch (error) {
//             console.error("Payment verification failed:", error);
//           }
//         },
//         notes: {
//           address: "Razorpay Corporate Office",
//         },
//         theme: {
//           color: "#121212",
//         },
//       };

//       const razor = new window.Razorpay(options);
//       razor.open();
//     } catch (error) {
//       console.error("Error initiating payment:", error);
//     }
//   };

//   return (
//     <Stack style={{ width: "100%" }}>
//       <Button
//         variant="contained"
//         className={styles.button}
//         onClick={checkoutHandler}
//       >
//         PLACE YOUR ORDER
//       </Button>
//       <Strip />
//       <PlacedPopup open={open} handleClose={handleClose} />
//     </Stack>
//   );
// };

// export default CheckoutButton;


// Assuming this is your CheckoutButton.jsx file

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
  console.log(profileState)
  console.log(getCartState)
  
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

 
  

    const userDetails={
      firstName:profileState?.firstName || "",
      phoneNumber:profileState?.phoneNumber || ""

  }
  console.log(userDetails)

  const handlePlaceOrder = async () => {
    const pricingData = {
      subTotal: 50000,
      tax: 500,
    };
    const id = getCartState.id;
    console.log(id)

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
