"use client";
import { useState } from "react";
import { Stack, Box } from "@mui/material";
import Specification from '@/components/ProductPage/Specification';
import ImageBox from '@/components/ProductPage/Image';
import PriceSection from '@/components/ProductPage/PriceSection';
import Footer from "@/components/Footer/Footer";
import FooterMobile from "@/components/Footer/Mobile/Footer";
import Popup from "@/components/ProductPage/Popup";
import global from '@/global.module.css';
import ImageView from "@/components/ProductPage/Mobile/Image";
import Product from "@/components/ProductPage/Mobile/Product";
import PopupAlert from "@/components/MobileView/Snackbar/PopupAlert";

const ProductPage = () => {
    const [open, setOpen] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);
    const [poptitle, setPopTitle] = useState({});
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenMobile = () => setOpenMobile(true);
    const handleCloseMobile = () => setOpenMobile(false);

    return (
        <>

            {/* DESKTOP VIEW */}
            <Box className={global.desktop}>
                <Stack direction={"row"} sx={{ padding: "5% 150px" }}>
                    <Stack direction={"column"} sx={{ width: "58%", alignItems: 'flex-end' }} spacing={2}>
                        <ImageBox />
                        <Specification />
                    </Stack>
                    <Stack direction={"column"} sx={{ width: "42%", alignItems: 'flex-end' }} spacing={2}>
                        <PriceSection handleOpen={handleOpen} setPopTitle={setPopTitle} />
                    </Stack>
                </Stack>
                <Footer />
                {open && <Popup open={open} handleClose={handleClose} poptitle={poptitle} />}
            </Box>

            {/* MOBILE VIEW */}
            <Box className={global.mobile} sx={{ padding: '20px', marginTop: '30px' }}>
                <ImageView />
                <Product handleOpen={handleOpenMobile} />
                {openMobile && <PopupAlert open={openMobile} handleClose={handleCloseMobile} title={"Product added successfully"} type={"success"} />}
            </Box>
            <Box className={global.mobile}>
                <FooterMobile />
            </Box>
        </>
    )
}
export default ProductPage;
