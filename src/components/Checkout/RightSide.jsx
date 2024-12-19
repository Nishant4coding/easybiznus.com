"use client";
import { editCartItemQuantity, getCart } from "@/Redux/Features/cart/cartSlice";
import { IonIcon } from "@ionic/react";
import { Button, Stack, Typography } from "@mui/material";
import { add, newspaperOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../CardI/Card";
import styles from "./checkout.module.css";
import Link from "next/link";

const RightSide = () => {
  const dil = 40;
  const dispatch = useDispatch();

  const getCartState = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleQuantityChange = (cartItemId, quantity) => {
    dispatch(editCartItemQuantity({ cartItemId, quantity }));
  };

  const total = getCartState?.items
    .map((item) => parseFloat(item?.salePrice * item?.quantity))
    .reduce((partialSum, a) => partialSum + a, 0);

  return (
    <Stack
      style={{ width: "45%", marginBottom: "100px", alignItems: "center" }}
      gap={3}
    >
      <Stack className={styles.leftboxes} gap={2}>
        {/* HEADING */}
        <Stack
          direction={"row"}
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #A0A0A0",
          }}
        >
          <Typography
            className={styles.boxTitle}
            style={{ border: "none", letterSpacing: "0px" }}
          >
            <IonIcon
              icon={newspaperOutline}
              className={styles.newsicon}
            ></IonIcon>
            ORDER DETAILS
          </Typography>
          <Link
            href="/"
            variant="contained"
            className={styles.button}
            style={{ margin: "0", padding: "5px 23px", borderRadius: "6px" }}
          >
            <IonIcon
              icon={add}
              className={styles.newsicon}
              style={{ fontSize: "18px" }}
            ></IonIcon>
            Add Product
          </Link>
        </Stack>

        {/* PRODUCTS CARDS */}
        <Stack gap={2} style={{ width: "100%" }}>
          {getCartState?.items.map((item, index) => (
            <Card
              key={index}
              data={item}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </Stack>

        {/* PRICING */}
        <Stack style={{ marginTop: "10px", padding: "0 50px" }}>
          <Stack
            direction="row"
            style={{
              justifyContent: "space-between",
              padding: "20px",
              paddingBottom: "0",
            }}
          >
            <Stack>
              <Typography className={styles.billing}>Subtotal</Typography>
              <Typography className={styles.billing}>Delivery</Typography>
            </Stack>
            <Stack>
              <Typography className={styles.billing}>₹ {total}</Typography>
              <Typography className={styles.billing}>₹ 40</Typography>
            </Stack>
          </Stack>
          <Stack style={{ alignItems: "center", margin: "5px 0" }}>
            <Typography
              style={{ width: "92%", borderTop: "1px solid #0D1A26" }}
            ></Typography>
          </Stack>
          <Stack
            direction="row"
            style={{
              justifyContent: "space-between",
              padding: "20px",
              paddingTop: "0",
            }}
          >
            <Stack>
              <Typography
                className={styles.billing}
                style={{ color: "#0D1A26", fontWeight: "700" }}
              >
                Grand Total :
              </Typography>
            </Stack>
            <Stack>
              <Typography
                className={styles.billing}
                style={{ color: "#0D1A26", fontWeight: "700" }}
              >
                ₹ {total + dil}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RightSide;
