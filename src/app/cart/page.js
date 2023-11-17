"use client";
import { useState } from "react";
import Checkout from "@/components/Cart/Checkout";
import Container from "@/components/Cart/Container";
import Frequent from "@/components/Cart/Frequent";
import Footer from "@/components/Footer/Footer";
import { Stack, Box } from "@mui/material";
import global from "@/global.module.css"
import EmptyCart from "@/components/MobileView/EmptyCart/EmptyCart";

const CartPage = () => {
    return (
        <>
            <Box className={global.desktop}>
                <Stack direction={"row"} sx={{ height: "min-content" }}>
                    <Container />
                    <Checkout />
                </Stack>
                <Frequent />
                <Footer />
            </Box>
            <Box className={global.mobile}>
                <EmptyCart />
            </Box>
        </>
    )
}

export default CartPage;