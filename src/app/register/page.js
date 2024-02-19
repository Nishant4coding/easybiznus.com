"use client";
import React from "react";
import RegisterImage from "../../assets/svg/RegisterPage.svg";
import LogingBtn from "../../assets/svg/login_button.svg";
import Image from "next/image";
import Register from "@/components/Register/Register";
import { Stack, Box } from "@mui/material";
import style from "../Global.module.css";

const RegisterPage = ({ setExist, setEnter }) => {
  return (
    <>
      <Box
        className={style.loginBtn}
        onClick={() => {
          setExist(true);
        }}
      >
        <Image src={RegisterImage} width={120} height={120} alt=""></Image>
      </Box>
      <Stack direction="row">
        <Image src={LogingBtn} className={style.entryImg} alt=""></Image>
        <Register setEnter={setEnter} />
      </Stack>
    </>
  );
};

export default RegisterPage;
