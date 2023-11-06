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

const HomePage = (props) => {
  const { t, i18n } = useTranslation();

  const [title, setTitle] = useState();

  useEffect(() => {
    setTitle(t("title"));
  }, [t("title")]);

  return (
    <>    
      <Carousel/>
      <Try/>
      <Trend/>
      <Recommend/>
      <Banner title="TRY & BUY"/>
      <Brand/>
      <Main/>
      <Footer/>
    </>
  );
};

export default HomePage;
