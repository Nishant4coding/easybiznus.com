"use client";

import { login } from "@/Redux/Features/auth/authSlice";
import { getProfile } from "@/Redux/Features/profile/profileSlice";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import style from "../Component.module.css";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    emailOrMobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(credentials)).then((res) => {
      if (res.type === "auth/login/fulfilled") {
        toast.success("Login Successful", {
          duration: 3000,
        });
        dispatch(getProfile());

        router.push("/");
      }
    });
  };

  return (
    <Box className={style.super_container}>
      <Stack className={style.container}>
        <Stack className={style.box}>
          <Typography variant="h4" className={style.login_title}>
            Login
          </Typography>

          <TextField
            type="text"
            label="Email or Mobile No"
            variant="outlined"
            name="emailOrMobile"
            onChange={handleChange}
            color="primary"
            sx={inputBoxStyle}
          />
          <TextField
            type="password"
            label="Password or OTP"
            variant="outlined"
            name="password"
            onChange={handleChange}
            color="primary"
            sx={inputBoxStyle}
          />
          <Typography className={style.desc_text}>
            <Link
              href="/password"
              style={{ textDecoration: "none", color: "black" }}
            >
              Forgot your password?
            </Link>
          </Typography>
          <FormGroup>
            <FormControlLabel
              sx={check_box}
              className={style.desc_text}
              control={
                <Checkbox
                  onChange={() =>
                    setCredentials({
                      ...credentials,
                      ["keepLogged"]: !credentials.keepLogged,
                    })
                  }
                  sx={{ p: 0, fontSize: 10 }}
                />
              }
              label="Keep me logged in - applies to all log in options below. More Info"
            />
          </FormGroup>

          {/* <Stack
            direction="row"
            spacing={3}
            style={{
              margin: "1rem 3rem 2rem 3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box boxShadow={3} borderRadius="50%" className={style.card}>
              <Link href="#" className={style.icons}>
                <Image src={googleIcon} alt="Google" className={style.icons} />
              </Link>
            </Box>
            <Box boxShadow={3} borderRadius="50%" className={style.card}>
              <Link href="#">
                <Image src={appleIcon} alt="Apple" className={style.icons} />
              </Link>
            </Box>
            <Box boxShadow={3} borderRadius="50%" className={style.card}>
              <Link href="#" className={style.icons}>
                <Image src={fbIcon} alt="FB" className={style.icons} />
              </Link>
            </Box>
          </Stack> */}
          <Stack>
            <ThemeProvider theme={theme}>
              <Button
                color="primary"
                variant="contained"
                endIcon={<ArrowForwardIcon style={{ fontSize: "14px" }} />}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "white", // Set the background color to transparent on hover
                  },
                }}
                onClick={handleLogin}
              >
                EMAIL LOGIN
              </Button>
            </ThemeProvider>
          </Stack>
          <Typography className={style.desc_text} style={{ marginTop: "1rem" }}>
            <Link href="#" style={{ textDecoration: "none", color: "black" }}>
              Terms And Conditions
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

const check_box = {
  gap: 1,
  "& .MuiFormControlLabel-root": {
    padding: 0.2,
  },
  "& .MuiTypography-root": {
    fontSize: 14,
    margin: 0.2,
    fontWeight: 550,
  },
  "& .MuiSvgIcon-root": {
    color: "#000000",
  },
};

const inputBoxStyle = {
  "& .MuiInputBase-root": {
    height: 42,
    my: 1,
    borderRadius: 2,
    fontSize: 16,
    color: "black",
  },
  "& label": {
    color: "#000",
    padding: "5px 0 0 0",
  },
  "& label.Mui-focused": {
    color: "#000",
    padding: "10px 0 0 0",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #000",
    },
  },
  "& .MuiInputLabel-root": {
    fontSize: 12,
  },
};

const btn_text = {
  "& .MuiButton-root": {
    justifyContent: "flex-start",
    margin: 0.1,
    fontWeight: 550,
    color: "#000000",
    backgroundColor: "#000000",
  },
  "& .MuiTouchRipple-root": {
    color: "#000000",
    backgroundColor: "#000000",
  },
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: grey[900],
    },
  },
});

export default Login;
