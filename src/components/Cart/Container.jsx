"use client";

import styles from "@/components/Wishlist/wishlist.module.css";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import Card from "../CardI/Card";
import Delete from "./Delete";

const Container = ({ cart, loading, error }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCartItemId, setSelectedCartItemId] = useState(null);

  const handleDeleteOpen = (cartItemId) => {
    setSelectedCartItemId(cartItemId);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setSelectedCartItemId(null);
  };

  return (
    <Stack
      direction={"column"}
      className={styles.container}
      gap={3}
      style={{ marginBottom: "30px" }}
    >
      <Typography className={styles.title}>
        MY SHOPPING CART{" "}
        {Array.isArray(cart.items) && `[ ${cart.items.length} ]`}
      </Typography>
      <Stack direction={"column"} gap={1.8}>
        {Array.isArray(cart.items) && cart.items.length > 0 ? (
          cart.items.map((item, index) => (
            <Card
              data={item}
              key={index}
              edit={true}
              onDelete={() => handleDeleteOpen(item?.id)}
            />
          ))
        ) : (
          <Typography>No items in the cart.</Typography>
        )}
      </Stack>
      {loading && <Typography>Loading...</Typography>}
      {error && (
        <Typography>Error: {error.message || JSON.stringify(error)}</Typography>
      )}
      <Delete
        open={deleteModalOpen}
        handleClose={handleDeleteClose}
        cartItemId={selectedCartItemId}
      />
    </Stack>
  );
};

export default Container;
