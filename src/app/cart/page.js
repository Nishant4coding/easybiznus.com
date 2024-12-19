"use client";
import Checkout from "@/components/Cart/Checkout";
import Container from "@/components/Cart/Container";
import Footer from "@/components/Footer/Footer";
import global from "@/global.module.css";
import { getCart } from "@/Redux/Features/cart/cartSlice";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
const CartPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    if (!profile.profile) {
      const time = setTimeout(() => {
        toast.error("Please login first");
        router.push("/login");
      }, 3000);
      return () => clearTimeout(time);
    } else {
      dispatch(getCart());
    }
  }, [dispatch, profile.profile, router]);

  return (
    <>
      <Box className={global.desktop}>
        <Stack direction={"row"} sx={{ height: "min-content" }}>
          <Container />
          <Checkout />
        </Stack>
        {/* <Frequent /> */}
        <Footer />
      </Box>
      {/* <Box className={global.mobile}>
        {!cartVal ? <EmptyCart /> : <Cart data={cart} />}
      </Box> */}
    </>
  );
};

export default CartPage;
