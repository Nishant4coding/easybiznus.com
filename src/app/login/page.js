"use client";

import Login from "../../components/Login/Login";
import LoginImage from "../../assets/svg/LoginPage.svg";
import JoinButton from "../../assets/svg/Join_button.svg";
import Image from "next/image";
import { Stack, Box } from "@mui/material";
import style from "../Global.module.css";

const LoginPage = ({ setIsLogin, setLoginSwitch }) => {
  return (
    <>
      <Box className={style.signupBtn} onClick={() => setLoginSwitch(true)}>
        <Image src={JoinButton} width={120} height={120} alt=""></Image>
      </Box>
      <Stack direction="row">
        <Login setIsLogin={setIsLogin} setLoginSwitch={setLoginSwitch} />
        <Image src={LoginImage} className={style.entryImg} alt=""></Image>
      </Stack>
    </>
  );
};

export default LoginPage;
