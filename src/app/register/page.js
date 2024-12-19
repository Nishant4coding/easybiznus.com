"use client";
import Register from "@/components/Register/Register";
import { Stack } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RegisterImage from "../../assets/svg/RegisterPage.svg";
import LogingBtn from "../../assets/svg/login_button.svg";
import style from "../Global.module.css";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();
  const profileState = useSelector((state) => state.profile);

  useEffect(() => {
    if (profileState.profile) {
      toast.error("Already Logged In, Please Logout First");
      router.push("/");
    }
  });

  return (
    <>
      <Link className={style.loginBtn} href={"/login"}>
        <Image src={LogingBtn} width={120} height={120} alt=""></Image>
      </Link>
      <Stack direction="row">
        <Image src={RegisterImage} className={style.entryImg} alt=""></Image>
        <Register />
      </Stack>
    </>
  );
};

export default RegisterPage;
