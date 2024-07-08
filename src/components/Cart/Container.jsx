import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Typography } from "@mui/material";
import Card from "../CardD/Card";
import { getCart } from "@/Redux/Features/cart/cartSlice";
import styles from '@/components/Wishlist/wishlist.module.css';

const Container = () => {
    const dispatch = useDispatch();
    const { cart, loading, error } = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <Stack direction={"column"} className={styles.container} gap={3} style={{ marginBottom: "30px" }}>
            <Typography className={styles.title}>MY SHOPPING CART {Array.isArray(cart) && `[ ${cart.length} ]`}</Typography>
            <Stack direction={"column"} gap={1.8}>
                {
                    Array.isArray(cart) ? cart.map((item, index) => (
                        <Card data={item} key={index} edit={false} />
                    )) : (
                        <Typography>No items in the cart.</Typography>
                    )
                }
            </Stack>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography>Error: {error.message || JSON.stringify(error)}</Typography>}
        </Stack>
    );
}

export default Container;
