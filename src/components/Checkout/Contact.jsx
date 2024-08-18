"use client";
import { IonIcon } from "@ionic/react";
import { Stack, Typography } from "@mui/material";
import {
    home,
    newspaperOutline,
    radioButtonOffOutline,
    radioButtonOnOutline
} from "ionicons/icons";
import styles from "./checkout.module.css";
const Contact = ({ contactData }) => {
  if (!contactData) return null;
  return (
    <Stack className={styles.leftboxes} gap={2}>
      <Stack direction={"row"} className={styles.card}>
        <Typography className={styles.boxTitle} style={{ border: "none" }}>
          <IonIcon
            icon={newspaperOutline}
            className={styles.newsicon}
          ></IonIcon>
          2. Contact Information
        </Typography>
      </Stack>
      <Stack
        gap={1}
        direction={"column"}
        style={{ marginBottom: "10px", alignItems: "flex-end" }}
      >
        {/* {
                    // boxArray.map((item, index) => ( */}
        {/* <Stack href="#" key={item.title} onClick={() => setSelect(index)} style={{width:'94%'}}> */}
        {/* <Stack href="#" onClick={() => setSelect(index)} style={{width:'94%'}}> */}
        {/* <Box data={contactData} select={select === index} /> */}
        <Box data={contactData} />
        {/* </Stack> */}
        {/* ))
                } */}
      </Stack>
      <Stack
        direction={"row"}
        style={{ width: "94%", alignSelf: "flex-end" }}
        gap={2}
      >
        <Stack style={{ width: "50%" }}>
          <Typography>Phone Number</Typography>
          <input
            type="text"
            className={styles.input}
            placeholder="9898989898"
          ></input>
        </Stack>
        <Stack style={{ width: "50%" }}>
          <Typography>Email</Typography>
          <input
            type="email"
            className={styles.input}
            placeholder="useremail@domain.com"
          ></input>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;

const Box = ({ data, select = true }) => {
  if (!data) return null;
  return (
    <Stack
      gap={2}
      style={{
        border: "1px solid #B5B5B5",
        borderRadius: "8px",
        alignItems: "center",
        padding: "10px",
        cursor: "pointer",
        width: "100%",
        position: "relative",
      }}
      direction={"row"}
    >
      {/* <IonIcon icon={icon} className={styles.newsicon}></IonIcon> */}
      <Typography style={{ fontSize: "15px" }}>
        {data?.profile?.firstName + " " + data?.profile?.lastName}
        {"  " + data?.profile?.phoneNumber}
        <Typography style={{ fontSize: "12px", color: "#A0A0A0" }}>
          {data?.profile?.email}
        </Typography>
      </Typography>
      {select ? (
        <IonIcon
          icon={radioButtonOnOutline}
          className={styles.newsicon}
          style={{ position: "absolute", right: "10px" }}
        ></IonIcon>
      ) : (
        <IonIcon
          icon={radioButtonOffOutline}
          className={styles.newsicon}
          style={{ position: "absolute", right: "10px" }}
        ></IonIcon>
      )}
    </Stack>
  );
};

const boxArray = [
  {
    icon: home,
    title: "+91 8787878787",
    subtitile: "useremail@domain.com",
  },
];
