"use client";
import { useEffect, useState } from "react";
import Checkout from "@/components/Cart/Checkout";
import Container from "@/components/Cart/Container";
import Frequent from "@/components/Cart/Frequent";
import Footer from "@/components/Footer/Footer";
import { Stack, Box } from "@mui/material";
import global from "@/global.module.css";
import EmptyCart from "@/components/MobileView/EmptyCart/EmptyCart";
import Cart from "@/components/MobileView/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "@/Redux/Features/cart/cartSlice";
import { checkAuth } from "@/Utility/auth";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cart);

   const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return true;
  };
  
   const checkAuth = () => {
    if (!isLoggedIn()) {
      router.push('/login');
    }
  }
  useEffect(() => {
    checkAuth(); 
    dispatch(getCart());
  }, [dispatch]);
  

  const cartVal = cart.items.length;
  console.log(cartVal);

  const total=cart.items.map(ele=>{
    return parseFloat(ele.salePrice)
  }).reduce((partialSum, a) => partialSum+a,0);

  console.log(total)


  return (
    <>
      <Box className={global.desktop}>
        <Stack direction={"row"} sx={{ height: "min-content" }}>
          <Container cart={cart} loading={loading} error={error}/>
          <Checkout />
        </Stack>
        {/* <Frequent /> */}
        <Footer />
      </Box>
      <Box className={global.mobile}>
        {!cartVal ? (
          <EmptyCart />
        ) : (
         
            <Cart
              data={cart}
            />
         
        )}
      </Box>
    </>
  );
};

export default CartPage;
