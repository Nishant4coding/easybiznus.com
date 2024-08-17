"use client";
import Footer from "@/components/Footer/Footer";
import Description from "@/components/ProductPage/Description";
import ImageBox from "@/components/ProductPage/Image";
import PriceSection from "@/components/ProductPage/PriceSection";
import global from "@/global.module.css";
import { getProductById } from "@/Redux/Features/product/productSlice";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Specification from "../../../components/ProductPage/Specification";

const ProductPage = ({ params }) => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product);
  const [details, setDetails] = useState(
    productState?.selectedProduct?.Product
  );
  const [data, setData] = useState(productState?.selectedProduct);

  const [open, setOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [poptitle, setPopTitle] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenMobile = () => setOpenMobile(true);
  const handleCloseMobile = () => setOpenMobile(false);

  useEffect(() => {
    dispatch(getProductById(params?.id));
  }, [dispatch, params?.id]);

  useEffect(() => {
    setDetails(productState?.selectedProduct?.Product);
  }, [productState]);
  useEffect(() => {
    setData(productState?.selectedProduct);
  }, [productState]);

  return (
    <>
      {!productState?.selectedProduct && (
        <Typography sx={{ textAlign: "center", marginTop: "50px" }}>
          No Product Found
        </Typography>
      )}

      {/* DESKTOP VIEW */}
      {productState?.selectedProduct && (
        <Box className={global?.desktop}>
          <Stack direction={"row"} sx={{ padding: "5% 150px" }}>
            <Stack
              direction={"column"}
              sx={{ width: "58%", alignItems: "flex-end" }}
              spacing={2}
            >
              {details && (
                <>
                  <ImageBox
                    image={details?.images}
                    primaryImage={details?.images[0]}
                    // primaryImage={details?.primaryImage}
                    //primary image in null right now
                  />
                  <Specification spec={details} />
                  <Description
                    des={productState?.selectedProduct?.Product?.description}
                  />
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
                  data={data}
                />
              )}
            </Stack>
          </Stack>
          <Footer />
          {/* {open && (
              <Popup open={open} handleClose={handleClose} poptitle={poptitle} />
            )} */}
        </Box>
      )}

      {/* MOBILE VIEW */}
      {/* <Box
        className={global?.mobile}
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
      <Box className={global?.mobile}>
        <FooterMobile />
      </Box> */}
    </>
  );
};
export default ProductPage;
