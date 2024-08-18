"use client";
import { IonIcon } from "@ionic/react";
import { Stack, Typography } from "@mui/material";
import {
  home,
  newspaperOutline,
  radioButtonOffOutline,
  radioButtonOnOutline,
} from "ionicons/icons";
import { useState } from "react";
import styles from "./checkout.module.css";
const Payment = () => {
  const [select, setSelect] = useState();

  return (
    <Stack className={styles.leftboxes} gap={2}>
      <Stack direction={"row"} className={styles.card}>
        <Typography className={styles.boxTitle} style={{ border: "none" }}>
          <IonIcon
            icon={newspaperOutline}
            className={styles.newsicon}
          ></IonIcon>
          3. Payment
        </Typography>
      </Stack>
      <Stack
        gap={1}
        direction={"column"}
        style={{ marginBottom: "10px", alignItems: "flex-end" }}
      >
        {boxArray.map((item, index) => (
          <Stack
            key={item.title}
            onClick={() => setSelect(index)}
            style={{ width: "94%" }}
          >
            <Box data={item} select={select === index} icon={item.icon} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Payment;

const Box = ({ data, select, icon }) => {
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
      <IonIcon icon={icon} className={styles.newsicon}></IonIcon>
      <Typography style={{ fontSize: "15px" }}>
        {data?.title}
        <Typography style={{ fontSize: "12px", color: "#A0A0A0" }}>
          {data?.subtitile}
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
  // {
  //     icon: home,
  //     title: 'Use Wallet Money',
  //     subtitile: 'Balance : 1000',
  // },
  {
    icon: home,
    title: "Razor Pay",
    subtitile: "Online Payment Method",
  },
  // {
  //     icon: home,
  //     title: 'Cash on Delivery',
  //     subtitile: 'Pay when you get.',
  // },
];
