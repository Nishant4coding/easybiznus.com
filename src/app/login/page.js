"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import JoinButton from "../../assets/svg/Join_button.svg";
import LoginImage from "../../assets/svg/LoginPage.svg";
import Login from "../../components/Login/Login.jsx";
import style from "../Global.module.css";

const LoginPage = () => {
  const router = useRouter();
  const profileState = useSelector((state) => state.profile);

  useEffect(() => {
    const userId = window.localStorage.getItem("userId");
    const timmer = setTimeout(() => {
      if (userId) {
        toast.error("Already Logged In, Please Logout First");
        router.push("/");
      }
    }, 3000);

    return () => clearTimeout(timmer);
  });

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
