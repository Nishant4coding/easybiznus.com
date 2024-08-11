"use client";

import Login from "../../components/Login/Login.jsx";
import LoginImage from "../../assets/svg/LoginPage.svg";
import JoinButton from "../../assets/svg/Join_button.svg";
import Image from "next/image";
import { Stack, Box, Typography, Link } from "@mui/material";
import style from "../Global.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProfile } from "@/Redux/Features/profile/profileSlice";

// const LoginPage = ({ setIsLogin, setLoginSwitch }) => {
const LoginPage = ({setLoginSwitch }) => {
  const profileState = useSelector(state => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    // const token = window.localStorage.getItem("token");
    if (profileState.profile === null) {
      dispatch(getProfile());
    }
    // if (profileState.profile) {
    //   setIsLogin(true);
    // }
    // if (profileState.profile) {
    //   setIsLogin(true);
    // }
  }, [profileState.profile])


  return (
    <Stack sx={{ justifyContent: 'center', alignItems: 'center', minHeight: '100svh' }}>
      {profileState.gettingProfile ?
        <Typography>Loading...</Typography>
        :
        <>
          <Box className={style.signupBtn} onClick={() => setLoginSwitch(true)}>
            <Link href="/register">
            <Image src={JoinButton} width={120} height={120} alt=""></Image>
            </Link>
          </Box>
          <Stack direction="row">
            {/* <Login setIsLogin={setIsLogin} setLoginSwitch={setLoginSwitch} /> */}
            <Login setLoginSwitch={setLoginSwitch} />
            <Image src={LoginImage} className={style.entryImg} alt=""></Image>
          </Stack>
        </>
      }
    </Stack>
  );
};

export default LoginPage;
