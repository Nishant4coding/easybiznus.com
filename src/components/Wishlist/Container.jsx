"use client";

import { fetchWishlist } from "@/Redux/Features/wishlist/wishlistSlice";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../CardD/Card";
import Delete from "../Wishlist/Delete";
import styles from "./wishlist.module.css";

const Container = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedWishItemId, setSelectedWishItemId] = useState(null);
  const dispatch = useDispatch();
  const wishlistState = useSelector((state) => state.wishlist.items);
  const handleDeleteOpen = (wishId) => {
    setSelectedWishItemId(wishId);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setSelectedWishItemId(null);
  };
  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  return (
    <Stack direction={"column"} className={styles.container} gap={3}>
      <Typography className={styles.title}>
        MY WISHLIST {wishlistState && `[ ${wishlistState.length} ]`}
      </Typography>
      <Stack direction={"column"} gap={1.8}>
        {wishlistState.length > 0 ? (
          wishlistState.map((item, index) => (
            <Card
              data={item}
              key={index}
              edit={false}
              onDelete={() => handleDeleteOpen(item.id)}
            />
          ))
        ) : (
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            Wishlist is empty
          </Typography>
        )}
      </Stack>
      <Delete
        open={deleteModalOpen}
        handleClose={handleDeleteClose}
        wishId={selectedWishItemId}
      />
    </Stack>
  );
};

export default Container;
