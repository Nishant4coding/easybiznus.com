"use client";
import { useState } from "react";
import { Stack, Button } from "@mui/material";
import Specification from '@/components/ProductPage/Specification';
import Image from '@/components/ProductPage/Image';
import PriceSection from '@/components/ProductPage/PriceSection';
import Footer from "@/components/Footer/Footer";
import Popup from "@/components/ProductPage/Popup";

const ProductPage = () => {
    const [open, setOpen] = useState(false);
    const [poptitle, setPopTitle]=useState({});
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <Stack direction={"row"} sx={{ padding: "5% 150px" }}>
            <Stack direction={"column"} sx={{ width: "58%", alignItems:'flex-end' }} spacing={2}>
                <Image />
                <Specification />
            </Stack>
            <Stack direction={"column"} sx={{ width: "42%", alignItems:'flex-end' }} spacing={2}>
                <PriceSection handleOpen={handleOpen} setPopTitle={setPopTitle}/>
            </Stack>
        </Stack>
        <Footer/>
        {open&&<Popup open={open} handleClose={handleClose} poptitle={poptitle}/>}
        </>
    )
}
export default ProductPage;