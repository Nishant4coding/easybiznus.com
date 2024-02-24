"use client";
import React from "react";
import RegisterImage from "../../assets/svg/RegisterPage.svg";
import LogingBtn from "../../assets/svg/login_button.svg";
import Image from "next/image";
import Register from "@/components/Register/Register";
import { Stack, Box } from "@mui/material";
import style from "../Global.module.css";
import { useRouter } from "next/navigation";
const RegisterPage = ({ setLoginSwitch,setIsLogin }) => {
  return (
    <>
      <Box className={style.loginBtn} onClick={() => setLoginSwitch(false)}>
        <Image src={LogingBtn} width={120} height={120} alt=""></Image>
      </Box>
      <Stack direction="row">
        <Image src={RegisterImage} className={style.entryImg} alt=""></Image>
        <Register setLoginSwitch={setLoginSwitch}  setIsLogin={setIsLogin}/>
      </Stack>
    </>
  );
};

export default RegisterPage;
