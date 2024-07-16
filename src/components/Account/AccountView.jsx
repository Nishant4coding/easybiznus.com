import { Pen } from "@/assets/svg";
import global from "@/global.module.css";
import { getProfile } from "@/Redux/Features/profile/profileSlice";
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
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./account.module.css";

const AccountView = () => {
  const [select, setSelect] = useState(0);
  const [address, setAddress] = useState(true);
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);

  useEffect(() => {
    if (!profileState.profile) {
      dispatch(getProfile());
    }
  }, [dispatch, profileState.profile]);

  const userData = useMemo(() => {
    if (profileState.profile) {
      return profileState.profile;
    }
    return null;
  }, [profileState.profile]);

  return (
    <Stack sx={{ width: "100%", alignItems: "center" }}>
      {/* {JSON.stringify(userData)} */}
      {userData && (
        <Stack
          sx={{ width: "120%", justifyContent: "center", marginTop: "40px" }}
          direction={"row"}
          gap={20}
        >
          <Stack sx={{ width: "35%" }} gap={10}>
            {/* Profile */}
            <Stack sx={{ width: "100%" }}>
              <Heading
                title="Profile"
                icon={personOutline}
                linkpath="/profile"
              />
              <Stack sx={{ marginTop: "20px", paddingLeft: "10px" }} gap={0.5}>
                <Typography className={styles.subhead}>
                  <Typography sx={{ width: "50px", fontWeight: "700" }}>
                    Name:
                  </Typography>
                  <Typography className={styles.subvalue}>
                    {userData.firstName} {userData.lastName}
                  </Typography>
                </Typography>
                <Typography className={styles.subhead}>
                  <Typography sx={{ width: "50px", fontWeight: "700" }}>
                    Email:
                  </Typography>
                  <Typography className={styles.subvalue}>
                    {userData.email}
                  </Typography>
                </Typography>
                <Typography className={styles.subhead}>
                  <Typography sx={{ width: "50px", fontWeight: "700" }}>
                    DOB:
                  </Typography>
                  <Typography className={styles.subvalue}>
                    {userData.birthday || "XX-XX-XXXX"}
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
                    {userData.phoneNumber}
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
              {address ? (
                <Stack
                  sx={{
                    width: "53%",
                    margin: "20px auto 10px",
                    paddingLeft: "10px",
                    alignItems: "center",
                  }}
                  gap={0.5}
                >
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
                    onClick={() => setAddress(false)}
                  >
                    <IonIcon icon={addOutline}></IonIcon>
                    ADD ADDRESS
                  </Button>
                </Stack>
              ) : (
                <Stack>
                  {addressArray.map((item, index) => (
                    <AddressCard
                      key={index}
                      select={select}
                      index={index}
                      title={item.title}
                      icon={item.icon}
                      sub={item.sub}
                      setSelect={setSelect}
                    />
                  ))}
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>
      )}
      <Button
        variant="contained"
        className={global.button}
        style={{ marginTop: "180px", padding: "10px 50px", fontSize: "13px" }}
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
      <Link href={linkpath || "#"} className={styles.edit}>
        {linkicon && <IonIcon icon={linkicon}></IonIcon>}
        {link || "EDIT"}
        {!linkicon && <Image src={Pen} alt="pen" className={styles.pen} />}
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
      <Stack direction={"row"} sx={{ alignItems: "center" }} gap={2}>
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
        <Stack className={styles.outline} direction={"row"} gap={2}>
          <IonIcon icon={icon}></IonIcon>
          <Stack>
            <Typography sx={{ fontSize: "14px" }}>{title}</Typography>
            <Typography sx={{ fontSize: "10px" }}>{sub}</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Link href="#" className={styles.edit2}>
        EDIT
        <Image src={Pen} alt="pen" className={styles.pen} />
      </Link>
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
