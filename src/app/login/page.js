"use client"

import Login from "../../components/Login/Login";
import LoginImage from "../../assets/svg/LoginPage.svg";
import JoinButton from "../../assets/svg/Join_button.svg";
import Image from "next/image";
import { Stack, Box } from "@mui/material";
import style from "../Global.module.css";

const LoginPage = ({ setExist, setEnter }) => {
  return (
    <>
      <Box
        className={style.signupBtn}
        onClick={() => {
          setExist(false);
        }}
      >
        <Image src={JoinButton} width={120} height={120} alt=""></Image>
      </Box>
      <Stack direction="row">
        <Login setEnter={setEnter} />
        <Image src={LoginImage} className={style.entryImg} alt=""></Image>
      </Stack>
    </>
  );
};

export default LoginPage;
