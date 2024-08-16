"use client";

import global from "@/global.module.css";
import {
  requestOTPThunk,
  resetPasswordThunk,
} from "@/Redux/Features/password/passwordSlice";
import { IonIcon } from "@ionic/react";
import { Button, Stack, Typography } from "@mui/material";
import { checkmarkCircleOutline, closeCircleOutline } from "ionicons/icons";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import styles from "./account.module.css";

const Password = ({ setForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const passwordState = useSelector((state) => state.password);

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPass = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleRequestOtp = () => {
    dispatch(requestOTPThunk(email)).then((res) => {
      if (res.type === "password/requestOTP/fulfilled") {
        if (res.payload) {
          toast.success(`Your OTP is: ${res.payload?.details?.OTP}`, {
            position: "top-center",
            autoClose: 10000,
          });
        }
      } else {
        toast.error("Failed to request OTP", {
          position: "top-center",
          autoClose: 5000,
        });
      }
    });
  };
  const handleSubmit = () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    const data = {
      emailOrMobile: email,
      otpValue: "",
      newPassword: password,
      id: passwordState.details.id,
    };

    dispatch(resetPasswordThunk(data)).then(() => {
      if (passwordState.resetSuccess) {
        setForm(false);
      }
    });
  };

  return (
    <Stack sx={{ width: "80%", alignItems: "center" }}>
      <Typography
        sx={{
          paddingBottom: "10px",
          borderBottom: "1px solid #A0A0A0",
          width: "82%",
          fontSize: "23px",
          fontWeight: "600",
          marginBottom: "40px",
        }}
      >
        Change Password
      </Typography>

      <Stack sx={{ width: "100%", marginBottom: "160px" }} gap={3}>
        {otp === "" ? (
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",

              gap: "10px",
            }}
          >
            <Input
              title={"Email"}
              placeholder={"Email"}
              width={"82%"}
              handlePass={handleEmailChange}
            />
            <Button
              variant="contained"
              className={global.button}
              style={{ padding: "10px 50px", fontSize: "13px" }}
              onClick={handleRequestOtp}
            >
              Request OTP
            </Button>
          </Stack>
        ) : (
          <>
            <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
              <Input
                title={"OTP"}
                placeholder={"OTP"}
                width={"82%"}
                handlePass={handleOtpChange}
              />
            </Stack>

            <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
              <Input
                type={"password"}
                handlePass={handlePass}
                title={"New Password"}
                placeholder={"New Password"}
                width={"82%"}
              />
            </Stack>

            <Stack sx={{ paddingLeft: "9%" }}>
              <TextIcon
                correct={password.length >= 8}
                text="Minimum 8 characters"
              />
              <TextIcon
                correct={password.length <= 15}
                text="Maximum 15 characters"
              />
              <TextIcon correct={/[a-z]/.test(password)} text="1 lower case" />
              <TextIcon correct={/[A-Z]/.test(password)} text="1 upper case" />
              <TextIcon correct={/[0-9]/.test(password)} text="1 digit" />
              <TextIcon
                correct={/[!@#$%^&*(),.?":{}|<>]/.test(password)}
                text="1 special character (!@#$%^&*)"
              />
            </Stack>

            <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
              <Input
                type={"password"}
                handlePass={handleConfirmPass}
                title={"Confirm New Password"}
                placeholder={"Confirm New Password"}
                width={"82%"}
              />
            </Stack>

            <Button
              variant="contained"
              className={global.button}
              onClick={handleSubmit}
              style={{ padding: "10px 50px", fontSize: "13px" }}
            >
              SAVE
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Password;

const Input = ({ type, handlePass, title, placeholder, width }) => {
  return (
    <Stack gap={1} sx={{ width: width ? width : "40%", position: "relative" }}>
      <Typography className={styles.inputhead}>{title}</Typography>
      <input
        onChange={handlePass}
        type={type ? type : "text"}
        placeholder={placeholder}
        className={styles.input}
      ></input>
    </Stack>
  );
};

const TextIcon = ({ correct, text }) => {
  return (
    <Stack direction={"row"} gap={1} style={{ alignItems: "center" }}>
      <IonIcon
        icon={correct ? checkmarkCircleOutline : closeCircleOutline}
        size={18}
        style={{ color: correct ? "#1BCFB4" : "#F55E53" }}
      />
      <Typography style={{ fontSize: "13px" }}>{text}</Typography>
    </Stack>
  );
};
