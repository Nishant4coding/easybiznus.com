"use client";

import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styles from "./order.module.css";
import Card from "../CardE/Card";
import { fetchOrders } from "@/Redux/Features/orders/orderSlice";
import { useEffect } from "react";

const Container = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const subOrders = orders?.flatMap((order) => order.subOrders) || [];

  return (
    <Stack className={styles.container}>
      {subOrders.length > 0 ? (
        subOrders.map((item, index) => <Card data={item} key={index} />)
      ) : (
        <p>No items found.</p>
      )}
    </Stack>
  );
};

export default Container;
