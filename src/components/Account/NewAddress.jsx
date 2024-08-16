"use client";
import global from "@/global.module.css";
import {
  createAddress,
  updateAddress,
} from "@/Redux/Features/address/addressSlice";
import { IonIcon } from "@ionic/react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { chevronDownOutline } from "ionicons/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./account.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const NewAddress = ({ initialData = null }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    addressTitle: "",
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    phoneNumber: "",
    isPrimary: false,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    const action = initialData ? updateAddress : createAddress;

    dispatch(action(formData))
      .unwrap()
      .then(() => {
        router.push("/account");
      })
      .catch((err) => {
        console.error("Error saving address: ", err);
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
        {initialData ? "Edit Address" : "New Address"}
      </Typography>
      <Stack sx={{ width: "100%", marginBottom: "160px" }} gap={5}>
        <Stack
          direction={"column"}
          gap={2}
          sx={{ width: "82%", margin: "0px auto" }}
        >
          <Typography
            sx={{
              paddingBottom: "10px",
              width: "100%",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Address Title
          </Typography>
          <Stack direction={"row"} sx={{ width: "100%" }} gap={1}>
            {selectArray?.map((item) => (
              <Link
                key={item}
                href="#"
                style={{
                  padding: "5px 10px",
                  textAlign: "center",
                  border: "1px solid #a9a9a9",
                  borderRadius: "5px",
                  width: "25%",
                  fontWeight: "600",
                }}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, addressTitle: item }))
                }
              >
                {item}
              </Link>
            ))}
          </Stack>
          <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
            <Input
              name="addressTitle"
              value={formData?.addressTitle}
              onChange={handleChange}
              placeholder={"Address Title"}
              width={"100%"}
            />
          </Stack>
        </Stack>

        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input
            name="firstName"
            value={formData?.firstName}
            onChange={handleChange}
            title={"First Name"}
            placeholder={"First Name"}
          />
          <Input
            name="lastName"
            value={formData?.lastName}
            onChange={handleChange}
            title={"Last Name"}
            placeholder={"Last Name"}
          />
        </Stack>

        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input
            name="addressLine1"
            value={formData?.addressLine1}
            onChange={handleChange}
            title={"Address Line 1 *"}
            placeholder={"Address Line 1"}
            width={"82%"}
          />
        </Stack>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input
            name="addressLine2"
            value={formData?.addressLine2}
            onChange={handleChange}
            title={"Address Line 2*"}
            placeholder={"Address Line 2"}
            width={"82%"}
          />
        </Stack>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input
            name="country"
            value={formData?.country}
            onChange={handleChange}
            title={"Country"}
            placeholder={"Select Country"}
          >
            <IonIcon
              icon={chevronDownOutline}
              className={styles.downArrow}
            ></IonIcon>
          </Input>
          <Input
            name="state"
            value={formData?.state}
            onChange={handleChange}
            title={"State *"}
            placeholder={"Select State"}
          >
            <IonIcon
              icon={chevronDownOutline}
              className={styles.downArrow}
            ></IonIcon>
          </Input>
        </Stack>
        <Stack
          direction={"row"}
          gap={2}
          className={styles.inputcontainer}
          sx={{ alignItems: "flex-end" }}
        >
          <Input
            name="city"
            value={formData?.city}
            onChange={handleChange}
            title={"City *"}
            placeholder={"Select City"}
          >
            <IonIcon
              icon={chevronDownOutline}
              className={styles.downArrow}
            ></IonIcon>
          </Input>
          <Input
            name="pincode"
            value={formData?.pincode}
            onChange={handleChange}
            title={"PIN CODE *"}
            placeholder={"PIN CODE"}
            fsize={"15px"}
          >
            <IonIcon
              icon={chevronDownOutline}
              className={styles.downArrow}
            ></IonIcon>
          </Input>
        </Stack>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input
            name="phoneNumber"
            value={formData?.phoneNumber}
            onChange={handleChange}
            title={"Phone Number *"}
            placeholder={"+91"}
            width={"82%"}
          />
        </Stack>
        <Stack direction={"row"} gap={2} sx={{ paddingLeft: "8%" }}>
          <FormControlLabel
            control={
              <Checkbox
                name="isPrimary"
                checked={formData?.isPrimary}
                onChange={handleChange}
                color="default"
              />
            }
            label="Make Default"
            labelPlacement="right"
          />
        </Stack>
      </Stack>
      <Button
        variant="contained"
        className={global.button}
        onClick={handleSubmit}
        style={{ padding: "10px 50px", fontSize: "13px" }}
      >
        {initialData ? "UPDATE" : "SAVE"}
      </Button>
    </Stack>
  );
};

export default NewAddress;

const Input = ({
  title,
  placeholder,
  width,
  children,
  fsize,
  name,
  value,
  onChange,
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
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      ></input>
      {children}
    </Stack>
  );
};

const selectArray = ["Home", "Apartments", "Office", "Other"];
