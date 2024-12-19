import { updateAddress } from "@/Redux/Features/address/addressSlice";
import { IonIcon } from "@ionic/react";
import { Stack, Typography } from "@mui/material";
import {
  home,
  add,
  businessOutline,
  newspaperOutline,
  radioButtonOffOutline,
  radioButtonOnOutline,
  storefrontOutline,
} from "ionicons/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./checkout.module.css";

const Address = ({ addressData }) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(
    addressData?.AddressBooks?.findIndex((address) => address.isPrimary) || 0
  );
  const [address, setAddress] = useState(
    addressData?.AddressBooks?.map((address, index) => ({
      ...address,
      isSelected: index === select,
    })) || []
  );
  useEffect(() => {
    setAddress(
      addressData?.AddressBooks?.map((address, index) => ({
        ...address,
        isSelected: index === select,
      })) || []
    );
  }, [addressData, select]);

  const handleSelect = (index) => {
    setSelect(index);
    const updatedAddress = { ...address[index], isPrimary: true };
    dispatch(updateAddress(updatedAddress));
  };

  return (
    <Stack className={styles.leftboxes} gap={2}>
      <Stack direction={"row"} className={styles.card}>
        <Typography className={styles.boxTitle} style={{ border: "none" }}>
          <IonIcon
            icon={newspaperOutline}
            className={styles.newsicon}
          ></IonIcon>
          1. Shipping Address
        </Typography>
        <Link
          href="/address"
          variant="contained"
          className={styles.button}
          style={{ margin: "0", padding: "5px 23px", borderRadius: "6px" }}
        >
          <IonIcon
            icon={add}
            className={styles.newsicon}
            style={{ fontSize: "18px" }}
          ></IonIcon>
          New Address
        </Link>
      </Stack>
      <Stack
        gap={1}
        direction={"column"}
        style={{ marginBottom: "10px", alignItems: "flex-end" }}
      >
        {address.map((item, index) => (
          <Stack
            key={item.id}
            onClick={() => handleSelect(index)}
            style={{ width: "94%" }}
          >
            <Box
              data={item}
              select={select === index}
              icon={
                item?.addressTitle === "Home"
                  ? home
                  : item?.addressTitle === "Office"
                  ? storefrontOutline
                  : item?.addressTitle === "Apartments"
                  ? businessOutline
                  : storefrontOutline
              }
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Address;

const Box = ({ data, select, icon }) => {
  const { addressTitle, subtitile } = data;
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
      <Stack>
        <Typography style={{ fontSize: "15px" }}>{addressTitle}</Typography>
        <Typography style={{ fontSize: "12px" }}>{subtitile}</Typography>
      </Stack>
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
    title: "Home",
    subtitile: "1067, Verona Mahagun Delhi (201501)",
  },
  {
    icon: businessOutline,
    title: "Apartments",
    subtitile: "1067, Verona Mahagun Delhi (201501)",
  },
  {
    icon: storefrontOutline,
    title: "Office",
    subtitile: "1067, Verona Mahagun Delhi (201501)",
  },
];
