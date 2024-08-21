"use client";

import { Pen } from "@/assets/svg";
import global from "@/global.module.css";
import { getProfile, logout } from "@/Redux/Features/profile/profileSlice";
import { IonIcon } from "@ionic/react";
import { Button, Stack, Typography } from "@mui/material";
import {
  addOutline,
  businessOutline,
  home,
  newspaperOutline,
  personOutline,
  radioButtonOffOutline,
  radioButtonOnOutline,
  storefrontOutline,
} from "ionicons/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import styles from "./account.module.css";
import { updateAddress } from "@/Redux/Features/address/addressSlice";

const AccountView = () => {
  const router = useRouter();
  const [select, setSelect] = useState(0);

  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile.profile);

  useEffect(() => {
    const time = setInterval(() => {
      if (!profileState) {
        toast.error("Please Login First");
        router.push("/login");
      }
    }, 3000);

    return () => clearInterval(time);
  });

  const loggingout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    router.push("/login");
  };

  useEffect(() => {
    if (!profileState) {
      dispatch(getProfile());
    }
  }, [dispatch, profileState]);

  const userData = useMemo(() => {
    if (profileState) {
      return profileState;
    }
    return null;
  }, [profileState]);

  const currPrimaryId = userData?.AddressBooks?.find(
    (item) => item?.isPrimary
  )?.id;
  useEffect(() => {
    if (!userData) return;
    setSelect(
      userData?.AddressBooks?.findIndex((item) => item?.id === currPrimaryId)
    );
    const address = userData?.AddressBooks[select];
    if (currPrimaryId !== address?.id) {
      dispatch(
        updateAddress({
          id: currPrimaryId,
          isPrimary: true,
          addressTitle: address?.addressTitle,
          pincode:
            typeof address?.pincode === "number"
              ? parseInt(address?.pincode)
              : 0,
        })
      );
    }

    // console.log("updated", currPrimaryId, currPrimaryId !== address?.id);
  }, [currPrimaryId, dispatch, select, userData]);

  if (!userData)
    return (
      <Stack sx={{ width: "100%", alignItems: "center" }}>
        <Typography>Loading...</Typography>
      </Stack>
    );

  return (
    <Stack sx={{ width: "100%", alignItems: "center" }}>
      <Stack
        sx={{ width: "120%", justifyContent: "center", marginTop: "40px" }}
        direction={"row"}
        gap={20}
      >
        <Stack sx={{ width: "35%" }} gap={10}>
          {/* Profile */}
          <Stack sx={{ width: "100%" }}>
            <Heading title="Profile" icon={personOutline} linkpath="/profile" />
            <Stack sx={{ marginTop: "20px", paddingLeft: "10px" }} gap={0.5}>
              <Typography className={styles.subhead}>
                <Typography sx={{ width: "50px", fontWeight: "700" }}>
                  Name:
                </Typography>
                <Typography className={styles.subvalue}>
                  {userData?.firstName + " " + userData?.lastName}
                </Typography>
              </Typography>
              <Typography className={styles.subhead}>
                <Typography sx={{ width: "50px", fontWeight: "700" }}>
                  Email:
                </Typography>
                <Typography className={styles.subvalue}>
                  {userData?.email}
                </Typography>
              </Typography>
              <Typography className={styles.subhead}>
                <Typography sx={{ width: "50px", fontWeight: "700" }}>
                  DOB:
                </Typography>
                <Typography className={styles.subvalue}>
                  {userData?.birthday ? userData?.birthday : "XX-XX-XXXX"}
                </Typography>
              </Typography>
            </Stack>
          </Stack>

          {/* Password */}
          <Stack sx={{ width: "100%" }}>
            <Heading
              title="Password"
              icon={personOutline}
              linkpath="/password"
            />
            <Stack sx={{ marginTop: "20px", paddingLeft: "10px" }} gap={0.5}>
              <Typography className={styles.subhead}>
                Password:
                <Typography className={styles.subvalue}>********</Typography>
              </Typography>
            </Stack>
          </Stack>

          {/* Phone Number */}
          <Stack sx={{ width: "100%" }}>
            <Heading title="Phone Number" icon={personOutline} />
            <Stack sx={{ marginTop: "20px", paddingLeft: "10px" }} gap={0.5}>
              <Typography className={styles.subhead}>
                Phone Number:
                <Typography className={styles.subvalue}>
                  {userData?.phoneNumber}
                </Typography>
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack sx={{ width: "35%" }}>
          {/* Address */}
          <Stack sx={{ width: "100%" }}>
            <Heading
              title="Address Book"
              icon={newspaperOutline}
              link={"ADD"}
              linkicon={addOutline}
              linkpath="/address"
            />
            <Stack sx={{ justifyContent: "center" }}>
              {userData?.AddressBooks?.length > 0 ? (
                userData?.AddressBooks.map((item, index) => (
                  <AddressCard
                    key={index}
                    select={select}
                    index={index}
                    title={item?.addressTitle}
                    icon={
                      item?.addressTitle === "Home" ? home : storefrontOutline
                    }
                    sub={
                      item.addressLine1 +
                      item.addressLine2 +
                      " " +
                      item.addressLine1 +
                      " " +
                      `(${item.city})`
                    }
                    setSelect={setSelect}
                  />
                ))
              ) : (
                <Typography
                  sx={{
                    fontSize: "14px",
                    textAlign: "center",
                    color: "#868686",
                  }}
                >
                  You need to enter your address so that we can send your
                  purchase
                </Typography>
              )}
            </Stack>
            <Stack
              sx={{
                width: "53%",
                margin: "20px auto 10px",
                paddingLeft: "10px",
                alignItems: "center",
              }}
              gap={0.5}
            >
              <Button
                variant="contained"
                className={global.button}
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  padding: "5px 20px",
                  width: "fit-content",
                  gap: "10px",
                }}
                onClick={() => router.push("/address")}
              >
                <IonIcon icon={addOutline}></IonIcon>
                ADD ADDRESS
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        className={global.button}
        style={{ marginTop: "180px", padding: "10px 50px", fontSize: "13px" }}
        onClick={loggingout}
      >
        LOGOUT
      </Button>
    </Stack>
  );
};

export default AccountView;

const Heading = ({ title, icon, link, linkicon, linkpath }) => {
  return (
    <Typography className={styles.headline} direction={"row"}>
      <Stack direction={"row"} sx={{ alignItems: "center" }} gap={2}>
        <IonIcon icon={icon}></IonIcon>
        {title}
      </Stack>
      <Link href={linkpath ? linkpath : "#"} className={styles.edit}>
        {linkicon && <IonIcon icon={linkicon}></IonIcon>}
        {link ? link : "EDIT"}
        {linkicon ? null : <Image src={Pen} alt="pen" className={styles.pen} />}
      </Link>
    </Typography>
  );
};

const AddressCard = ({ title, icon, sub, setSelect, select, index }) => {
  return (
    <Stack
      className={styles.addresscard}
      direction={"row"}
      gap={2}
      onClick={() => setSelect(index)}
    >
      <Stack
        direction={"row"}
        sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}
        gap={2}
      >
        {select === index ? (
          <IonIcon
            style={{ fontSize: "19px" }}
            icon={radioButtonOnOutline}
          ></IonIcon>
        ) : (
          <IonIcon
            style={{ fontSize: "19px" }}
            icon={radioButtonOffOutline}
          ></IonIcon>
        )}
        <Stack
          className={styles.outline}
          direction={"row"}
          gap={2}
          sx={{ width: "100%" }}
        >
          <IonIcon icon={icon}></IonIcon>
          <Stack sx={{ width: "100%" }}>
            <Typography sx={{ fontSize: "14px" }}>{title}</Typography>
            <Typography sx={{ fontSize: "10px" }}>{sub}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const addressArray = [
  {
    title: "Home",
    sub: "1067, Verona Mahagun, Delhi(205101)",
    icon: home,
  },
  {
    title: "Apartments",
    sub: "1067, Verona Mahagun, Delhi(205101)",
    icon: businessOutline,
  },
  {
    title: "Office",
    sub: "1067, Verona Mahagun, Delhi(205101)",
    icon: storefrontOutline,
  },
  {
    title: "OTHER",
    sub: "1067, Verona Mahagun, Delhi(205101)",
    icon: storefrontOutline,
  },
];
