"use client";
import BasicBreadcrumbsB from "@/components/BreadCrumbsB";
import LeftBox from "@/components/Checkout/LeftBox";
import RightSide from "@/components/Checkout/RightSide";
import styles from "@/components/Checkout/checkout.module.css";
import Footer from "@/components/Footer/Footer";
import PaymentOpt from "@/components/MobileView/Cart/PaymentOpt";
import global from "@/global.module.css";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

//Hello demo
const CheckoutPage = () => {
  const router = useRouter();
  const profileState = useSelector((state) => state.profile);

  useEffect(() => {
    if (profileState.profile === null) {
      const time = setInterval(() => {
        router.push("/login");
      }, 3000);
      return () => clearInterval(time);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileState.profile]);

  if (!profileState) return null;
  return (
    <>
      <Stack className={global.desktop}>
        <BasicBreadcrumbsB
          inactive={breadcrumbArray}
          fsize={"13px"}
          active="SUMMARY"
          mt={"10px"}
        />
        <Typography
          className={styles.heading}
          style={{ paddingLeft: "100px", letterSpacing: "1.2px" }}
        >
          CHECKOUT
        </Typography>
        <Stack
          direction={"row"}
          style={{ padding: "10px 80px", justifyContent: "space-around" }}
        >
          <LeftBox />
          <RightSide />
        </Stack>
        <Footer />
      </Stack>

      <Stack className={global.mobile}>
        <PaymentOpt />
      </Stack>
    </>
  );
};

export default CheckoutPage;

const breadcrumbArray = [
  {
    title: "CART",
    path: "/cart",
  },
];
