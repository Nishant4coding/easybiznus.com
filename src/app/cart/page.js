"use client";
import Checkout from "@/components/Cart/Checkout";
import Container from "@/components/Cart/Container";
import Footer from "@/components/Footer/Footer";
import global from "@/global.module.css";
import { getCart } from "@/Redux/Features/cart/cartSlice";
import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.items
        .map((ele) => parseFloat(ele.salePrice * ele.quantity))
        .reduce((partialSum, a) => partialSum + a, 0)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.items]);

  return (
    <>
      <Box className={global.desktop}>
        <Stack direction={"row"} sx={{ height: "min-content" }}>
          <Container cart={cart} loading={loading} error={error} />
          <Checkout total={total} />
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
