"use client"
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import Carousel from '@/components/Carousel/Carousel';
import Try from "@/components/Home/Try/Try";
import Trend from "@/components/Home/Trend/Trend";
import Recommend from "@/components/Home/Recommend/Recommend";
import Banner from "@/components/Home/Try/Banner";
import Brand from "@/components/Home/Brand/Brand";
import Main from "@/components/Home/Main/Main";
import Footer from "@/components/Footer/Footer";
import CarouselMob from "@/components/Carousel/MobileView/CarouselMob";
import { imgMob1, imgMob2 } from '@/assets/carousel/index';
import Category from "@/components/MobileView/Categories/Category";
import Trending from "@/components/MobileView/Trending/Trending";
import Popular from "@/components/MobileView/Popular/Popular";
import { Stack } from "@mui/material";
import TopCategories from "@/components/MobileView/TopCategories/TopCategories";
import ShoeCategories from "@/components/MobileView/ShoeCategories/ShoeCategories";
import MensCollections from "@/components/MobileView/MensCollections/MensCollections";
import WomensCollections from "@/components/MobileView/WomensCollections/WomensCollections";
import KidsCollections from "@/components/MobileView/KidsCollections/KidsCollections";
import FooterM from "@/components/MobileView/Footer/FooterM";
import global from '@/global.module.css'
import { fetchDashboard} from "@/Redux/Features/dashboard/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";

const HomePage = (props) => {

  const dispatch = useDispatch();
  const dashboardState = useSelector(state => state.dashboard);
  const [dashboardData, setDashboardData] = useState(dashboardState)

  useEffect(() => {
      dispatch(fetchDashboard());
  }, [dispatch]);
  
  useEffect(() => {
      setDashboardData(dashboardState);
  }, [dashboardState]);

  // console.log(dashboardData)

  const { t, i18n } = useTranslation();
  const [title, setTitle] = useState();
  const T = t("title");

  useEffect(() => {
    setTitle(t("title"));
  }, [T]);

  return (
    <>

      <div className={global.desktop}>
        <Carousel />
        <Try/>
        <Trend />
        {/* <Recommend /> */}
        {/* <Banner title="TRY & BUY" /> */}
        {/* <Brand dashboardData={dashboardData}/> */}
        <Main />
        <Footer />
      </div>

      {/* Mobile view */}
      <div className={global.mobile} style={{ backgroundColor: "#EBEBEB" }}>
        <div>
          <CarouselMob img={imgMob1} />
          <CarouselMob img={imgMob2} />
        </div>
        <Stack sx={{width:'100%', padding:'15px'}}>
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
