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
import styles from './page.module.css';
import global from '@/global.module.css'

const HomePage = (props) => {
  const { t, i18n } = useTranslation();

  const [title, setTitle] = useState();
  const T = t("title");

  useEffect(() => {
    setTitle(t("title"));
  }, [T]);

  return (
    <>

      {/* DESKTOP */}
      <div className={global.desktop}>
        <Carousel />
        <Try />
        <Trend />
        <Recommend />
        <Banner title="TRY & BUY" />
        <Brand />
        <Main />
        <Footer />
      </div>

      {/* MOBILE */}
      <div className={global.mobile}>
        <CarouselMob img={imgMob1} />
        <CarouselMob img={imgMob2} />
      </div>
    </>
  );
};

export default HomePage;
