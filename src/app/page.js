"use client";
import Carousel from "@/components/Carousel/Carousel";
import Try from "@/components/Home/Try/Try";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
// import Trend from "@/components/Home/Trend/Trend";
// import Recommend from "@/components/Home/Recommend/Recommend";
// import Banner from "@/components/Home/Try/Banner";
// import Brand from "@/components/Home/Brand/Brand";
import { imgMob1, imgMob2 } from "@/assets/carousel/index";
import CarouselMob from "@/components/Carousel/MobileView/CarouselMob";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Home/Main/Main";
import Category from "@/components/MobileView/Categories/Category";
import FooterM from "@/components/MobileView/Footer/FooterM";
import KidsCollections from "@/components/MobileView/KidsCollections/KidsCollections";
import MensCollections from "@/components/MobileView/MensCollections/MensCollections";
import Popular from "@/components/MobileView/Popular/Popular";
import ShoeCategories from "@/components/MobileView/ShoeCategories/ShoeCategories";
import TopCategories from "@/components/MobileView/TopCategories/TopCategories";
import Trending from "@/components/MobileView/Trending/Trending";
import WomensCollections from "@/components/MobileView/WomensCollections/WomensCollections";
import global from "@/global.module.css";
import { getAllCategories } from "@/Redux/Features/category/categorySlice";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const HomePage = (props) => {
  const { t } = useTranslation();

  const [title, setTitle] = useState();
  const T = t("title");

  useEffect(() => {
    setTitle(t("title"));
  }, [t]);

  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);
  const categories = categoryState.categories.categories;

  useEffect(() => {
    if (categories && categories?.length === 0) {
      dispatch(getAllCategories());
    }
  }, [dispatch, categories]);

  return (
    <>
      <div className={global.desktop}>
        <Carousel />
        {categories && <Try categories={categories} />}
        {/* <Trend /> */}
        {/* <Recommend /> */}
        {/* <Banner title="TRY & BUY" /> */}
        {/* <Brand /> */}
        <Main />
        <Footer />
      </div>

      {/* Mobile view */}
      <div className={global.mobile} style={{ backgroundColor: "#EBEBEB" }}>
        <div>
          <CarouselMob img={imgMob1} />
          <CarouselMob img={imgMob2} />
        </div>
        <Stack sx={{ width: "100%", padding: "15px" }}>
          <Category />
          <Trending />
          <Popular />
          <TopCategories />
          <ShoeCategories />
          <MensCollections />
          <WomensCollections />
          <KidsCollections />
          <FooterM />
        </Stack>
      </div>
    </>
  );
};

export default HomePage;
