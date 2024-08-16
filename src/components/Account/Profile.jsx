"use client";
import global from "@/global.module.css";
import {
    updateProfile
} from "@/Redux/Features/profile/profileSlice";
import { IonIcon } from "@ionic/react";
import {
    Button,
    Stack,
    Typography
} from "@mui/material";
import { radioButtonOffOutline, radioButtonOnOutline } from "ionicons/icons";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import styles from "./account.module.css";

const Profile = ({}) => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);
  useLayoutEffect(() => {
    if (profileState.profile) {
      setUserData(profileState.profile);
    }
  }, [profileState.profile]);

  const handleUpadteProfile = async () => {
    let data = { ...userData };
    data.birthday = `${userData?.birthday.split("-")[1]}-${
      userData?.birthday.split("-")[2]
    }-${userData?.birthday.split("-")[0]}`;
    dispatch(updateProfile(data));
    router.push("/account");
  };

  useEffect(() => {
    if (profileState.successUpdating) {
      toast.success("Profile Updated Successfully", {
        duration: 3000,
        position: "top-center",
      });
    }
  }, [profileState.successUpdating]);

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
        Edit Profile
      </Typography>

      <Stack sx={{ width: "100%", marginBottom: "160px" }} gap={5}>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input
            title={"First Name *"}
            placeholder={"First Name"}
            width={"82%"}
            value={userData?.firstName}
            changeValue={setUserData}
            name={"firstName"}
            data={userData}
          />
        </Stack>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input
            title={"Last Name *"}
            placeholder={"Last Name"}
            width={"82%"}
            value={userData?.lastName}
            changeValue={setUserData}
            name={"lastName"}
            data={userData}
          />
        </Stack>

        <Stack direction={"row"} style={{ paddingLeft: "10%" }} gap={1}>
          {!userData && (
            <Stack gap={2.1} sx={{ paddingTop: "3px" }}>
              <IonIcon icon={radioButtonOffOutline}></IonIcon>
              <IonIcon icon={radioButtonOffOutline}></IonIcon>
            </Stack>
          )}
          {userData?.gender === "male" && (
            <Stack gap={2.1} sx={{ paddingTop: "3px" }}>
              <IonIcon icon={radioButtonOnOutline}></IonIcon>
              <IonIcon icon={radioButtonOffOutline}></IonIcon>
            </Stack>
          )}
          {userData?.gender === "female" && (
            <Stack gap={2.1} sx={{ paddingTop: "3px" }}>
              <IonIcon icon={radioButtonOffOutline}></IonIcon>
              <IonIcon icon={radioButtonOnOutline}></IonIcon>
            </Stack>
          )}
          <Stack gap={1}>
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => {
                console.log(userData?.gender === "male");
                setUserData({ ...userData, ["gender"]: "male" });
              }}
            >
              Male
            </Typography>
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setUserData({ ...userData, ["gender"]: "female" });
              }}
            >
              Female
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction={"column"}
          style={{ width: "82%", margin: "0 auto", alignItems: "center" }}
        >
          <Typography className={styles.inputhead} style={{ width: "100%" }}>
            DOB *
          </Typography>
          <Stack
            direction={"row"}
            style={{ width: "100%", justifyContent: "space-between" }}
            gap={1}
          >
            <Inputdd
              placeholder={"DD"}
              width={"32%"}
              value={userData?.birthday}
              changeValue={setUserData}
              name={"birthday"}
              data={userData}
            />
            <Inputmm
              placeholder={"MM"}
              width={"32%"}
              value={userData?.birthday}
              changeValue={setUserData}
              name={"birthday"}
              data={userData}
            />
            <Inputyy
              placeholder={"YYYY"}
              width={"32%"}
              value={userData?.birthday}
              changeValue={setUserData}
              name={"birthday"}
              data={userData}
            />
          </Stack>
        </Stack>

        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input
            title={"Email *"}
            placeholder={"xyz123@gmail.com"}
            width={"82%"}
            value={userData?.email}
            changeValue={setUserData}
            name={"email"}
            data={userData}
          />
        </Stack>
      </Stack>
      <Button
        variant="contained"
        className={global.button}
        style={{ padding: "10px 50px", fontSize: "13px" }}
        onClick={handleUpadteProfile}
      >
        SAVE
      </Button>
      <Toaster />
    </Stack>
  );
};

export default Profile;

const Input = ({
  name,
  value,
  title,
  placeholder,
  width,
  children,
  fsize,
  changeValue,
  data,
}) => {
  return (
    <Stack gap={1} sx={{ width: width ? width : "40%", position: "relative" }}>
      <Typography
        style={{ fontSize: fsize ? fsize : "" }}
        className={styles.inputhead}
      >
        {title}
      </Typography>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={(e) =>
          changeValue({ ...data, [e.target.name]: e.target.value })
        }
        name={name}
      ></input>
      {children}
    </Stack>
  );
};

const Inputdd = ({
  name,
  value,
  title,
  placeholder,
  width,
  children,
  fsize,
  changeValue,
  data,
}) => {
  const birthdayHandle = (e) => {
    if (e.target.value.length <= 2) {
      if (typeof parseInt(e.target.value) === "number") {
        const dd = `${value?.split("-")[0]}-${value?.split("-")[1]}-${
          e.target.value
        }`;
        changeValue({ ...data, ["birthday"]: dd });
      } else {
        // e.target.value = '';
      }
    }
  };

  return (
    <Stack gap={1} sx={{ width: width ? width : "40%", position: "relative" }}>
      <Typography
        style={{ fontSize: fsize ? fsize : "" }}
        className={styles.inputhead}
      >
        {title}
      </Typography>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={value?.split("-")[2]}
        onChange={(e) => birthdayHandle(e)}
        name={name}
      ></input>
      {children}
    </Stack>
  );
};
const Inputmm = ({
  name,
  value,
  title,
  placeholder,
  width,
  children,
  fsize,
  changeValue,
  data,
}) => {
  const birthdayHandle = (e) => {
    console.log("hi");
    if (e.target.value.length <= 2) {
      if (typeof parseInt(e.target.value) === "number") {
        const mm = `${value?.split("-")[0]}-${e.target.value}-${
          value?.split("-")[2]
        }`;
        changeValue({ ...data, ["birthday"]: mm });
      } else {
        // e.target.value = '';
      }
    }
  };

  return (
    <Stack gap={1} sx={{ width: width ? width : "40%", position: "relative" }}>
      <Typography
        style={{ fontSize: fsize ? fsize : "" }}
        className={styles.inputhead}
      >
        {title}
      </Typography>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={value?.split("-")[1]}
        onChange={(e) => birthdayHandle(e)}
        name={name}
      ></input>
      {children}
    </Stack>
  );
};

const Inputyy = ({
  name,
  value,
  title,
  placeholder,
  width,
  children,
  fsize,
  changeValue,
  data,
}) => {
  const birthdayHandle = (e) => {
    if (e.target.value.length <= 4) {
      if (typeof parseInt(e.target.value) === "number") {
        const yy = `${e.target.value}-${value?.split("-")[1]}-${
          value?.split("-")[2]
        }`;
        console.log(yy);
        changeValue({ ...data, ["birthday"]: yy });
      } else {
        // e.target.value = '';
      }
    }
  };

  return (
    <Stack gap={1} sx={{ width: width ? width : "40%", position: "relative" }}>
      <Typography
        style={{ fontSize: fsize ? fsize : "" }}
        className={styles.inputhead}
      >
        {title}
      </Typography>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={value?.split("-")[0]}
        onChange={(e) => birthdayHandle(e)}
        name={name}
      ></input>
      {children}
    </Stack>
  );
};
