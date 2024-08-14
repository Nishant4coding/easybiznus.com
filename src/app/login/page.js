"use client";

import Login from "../../components/Login/Login.jsx";
import LoginImage from "../../assets/svg/LoginPage.svg";
import JoinButton from "../../assets/svg/Join_button.svg";
import Image from "next/image";
import { Stack, Box, Typography } from "@mui/material";
import style from "../Global.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProfile } from "@/Redux/Features/profile/profileSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const profileState = useSelector((state) => state.profile);

  useEffect(() => {
    if (profileState.profile) {
      router.push("/");
    }
  }, [profileState.profile, router]);

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100svh",
      }}
    >
      {profileState.gettingProfile ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <Link className={style.signupBtn} href={"/register"}>
            <Image src={JoinButton} width={120} height={120} alt=""></Image>
          </Link>
          <Stack direction="row">
            <Login />
            <Image src={LoginImage} className={style.entryImg} alt=""></Image>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default LoginPage;
