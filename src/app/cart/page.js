"use client";
import { useState } from "react";
import Checkout from "@/components/Cart/Checkout";
import Container from "@/components/Cart/Container";
import Frequent from "@/components/Cart/Frequent";
import Footer from "@/components/Footer/Footer";
import { Stack } from "@mui/material";

const Page = () => {
    return (
        <>
            <Stack direction={"row"} sx={{height:"min-content"}}>
                <Container />
                <Checkout />
            </Stack>
            <Frequent />
            <Footer />
        </>
    )
}

export default Page;