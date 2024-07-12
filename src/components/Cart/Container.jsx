import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Typography } from "@mui/material";
import Card from "../CardI/Card";
import { getCart } from "@/Redux/Features/cart/cartSlice";
import styles from '@/components/Wishlist/wishlist.module.css';
import Delete from './Delete';

const Container = () => {
    const dispatch = useDispatch();
    const { cart, loading, error } = useSelector(state => state.cart);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedCartItemId, setSelectedCartItemId] = useState(null);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    useEffect(() => {
        console.log("Cart State: ", cart);
    }, [cart]);

    const handleDeleteOpen = (cartItemId) => {
        setSelectedCartItemId(cartItemId);
        setDeleteModalOpen(true);
    };

    const handleDeleteClose = () => {
        setDeleteModalOpen(false);
        setSelectedCartItemId(null);
    };

    return (
        <Stack direction={"column"} className={styles.container} gap={3} style={{ marginBottom: "30px" }}>
            <Typography className={styles.title}>MY SHOPPING CART {Array.isArray(cart) && `[ ${cart.length} ]`}</Typography>
            <Stack direction={"column"} gap={1.8}>
                {
                    Array.isArray(cart) && cart.length > 0 ? cart.map((item, index) => (
                        <Card 
                            data={item} 
                            key={index} 
                            edit={false} 
                            onDelete={() => handleDeleteOpen(item.id)} 
                        />
                    )) : (
                        <Typography>No items in the cart.</Typography>
                    )
                }
            </Stack>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography>Error: {error.message || JSON.stringify(error)}</Typography>}
            <Delete 
                open={deleteModalOpen} 
                handleClose={handleDeleteClose} 
                cartItemId={selectedCartItemId}
            />
        </Stack>
    );
};

export default Container;
