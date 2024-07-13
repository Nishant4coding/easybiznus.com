"use client";
import { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import Specification from "@/components/ProductPage/Specification";
import ImageBox from "@/components/ProductPage/Image";
import PriceSection from "@/components/ProductPage/PriceSection";
import Footer from "@/components/Footer/Footer";
import FooterMobile from "@/components/Footer/Mobile/Footer";
import Popup from "@/components/ProductPage/Popup";
import global from "@/global.module.css";
import ImageView from "@/components/ProductPage/Mobile/Image";
import Product from "@/components/ProductPage/Mobile/Product";
import PopupAlert from "@/components/MobileView/Snackbar/PopupAlert";
import { getProductById } from "@/Redux/Features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Description from "@/components/ProductPage/Description";

const ProductPage = ({ params }) => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const [details, setDetails] = useState(productState.selectedProduct.Product);

  if (details) {
    console.log(details.description);
  } else {
    console.log("Product details are not available");
  }

  const [open, setOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [poptitle, setPopTitle] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenMobile = () => setOpenMobile(true);
  const handleCloseMobile = () => setOpenMobile(false);

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, []);

  useEffect(() => {
    setDetails(productState.selectedProduct.Product);
  }, [productState]);

  return (
    <>
      {!productState.selectedProduct && (
        <Typography sx={{ textAlign: "center", marginTop: "50px" }}>
          No Product Found...
        </Typography>
      )}

      {/* DESKTOP VIEW */}
      {productState.selectedProduct && (
        <Box className={global.desktop}>
          <Stack direction={"row"} sx={{ padding: "5% 150px" }}>
            <Stack
              direction={"column"}
              sx={{ width: "58%", alignItems: "flex-end" }}
              spacing={2}
            >
              {details && (
                <>
                  <ImageBox image={details.primaryImage} />
                  <Specification spec={details.specifications} />
                  <Description des={productState.selectedProduct.Product.description} />
                </>
              )}
            </Stack>
            <Stack
              direction={"column"}
              sx={{ width: "42%", alignItems: "flex-end" }}
              spacing={2}
            >
              {details && (
                <PriceSection
                  handleOpen={handleOpen}
                  setPopTitle={setPopTitle}
                  data={details}
                />
              )}
            </Stack>
          </Stack>
          <Footer />
          {open && (
            <Popup open={open} handleClose={handleClose} poptitle={poptitle} />
          )}
        </Box>
      )}

      {/* MOBILE VIEW */}
      <Box
        className={global.mobile}
        sx={{ padding: "20px", marginTop: "30px" }}
      >
        <ImageView />
        <Product handleOpen={handleOpenMobile} />
        {openMobile && (
          <PopupAlert
            open={openMobile}
            handleClose={handleCloseMobile}
            title={"Product added successfully"}
            type={"success"}
            path={"/cart"}
          />
        )}
      </Box>
      <Box className={global.mobile}>
        <FooterMobile />
      </Box>
    </>
  );
};
export default ProductPage;
