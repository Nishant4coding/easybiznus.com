"use client"

import { fetchWishlist } from "@/Redux/Features/wishlist/wishlistSlice";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../CardD/Card";
import Delete from "../Cart/Delete";
import styles from './wishlist.module.css';

const Container = () => {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedCartItemId, setSelectedCartItemId] = useState(null);
    const dispatch = useDispatch();
    const wishlistState = useSelector(state => state.wishlist);
    console.log(wishlistState)
    const handleDeleteOpen = (cartItemId) => {
        setSelectedCartItemId(cartItemId);
        setDeleteModalOpen(true);
    };

    const handleDeleteClose = () => {
        setDeleteModalOpen(false);
        setSelectedCartItemId(null);
    };

    useEffect(() => {
        dispatch(fetchWishlist());
        
    }, [dispatch]);

    return (
        <Stack direction={"column"} className={styles.container} gap={3}>
            <Typography className={styles.title}>
                MY WISHLIST {wishlistState.items && `[ ${wishlistState.items.length} ]`}
            </Typography>
            <Stack direction={"column"} gap={1.8}>
                {
                    wishlistState.items && wishlistState.items.map((item, index) => (
                        <Card  data={item} 
                        key={index}     
                        edit={false} 
                        onDelete={() => handleDeleteOpen(item.id)} />
                    ))
                }
            </Stack>
            {/* {loading && <Typography>Loading...</Typography>}
            {error && <Typography>Error: {error.message || JSON.stringify(error)}</Typography>} */}
            <Delete 
                open={deleteModalOpen} 
                handleClose={handleDeleteClose} 
                cartItemId={selectedCartItemId}
            />
        </Stack>
    );
};

export default Container;
