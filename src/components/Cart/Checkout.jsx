"use client";
import { Button, Link, Stack, Typography } from "@mui/material";
import styles from './cart.module.css';
import { IonIcon } from "@ionic/react";
import { caretDownOutline } from "ionicons/icons";
import Strip from "./Strip";
import { getCart } from "@/Redux/Features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { checkStock } from "@/Redux/Features/checkout/checkStockSlice";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
    const dispatch = useDispatch();

    const cartStock = useSelector((state) => state.stock.cart);
    const stockLoading = useSelector((state) => state.stock.loading);
    const stockError = useSelector((state) => state.stock.error);

    const getCartState = useSelector((state) => state.cart.cart);
    const [cartStates, setCartState] = useState(getCartState);

    const [canProceed, setCanProceed] = useState(false);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    useEffect(() => {
        setCartState(getCartState);
    }, [getCartState]);

    const total = getCartState.items
      .map((ele) => parseFloat(ele.salePrice * ele.quantity))
      .reduce((partialSum, a) => partialSum + a, 0);

    const delivery = 40;

    const handleCheckout = async () => {
        try {
            const response = await dispatch(checkStock()).unwrap();
            console.log("Response:", response);

            if (response.message === "Stock is sufficient, proceed to payment.") {
                setCanProceed(true);
                // Proceed to the payment or next step in the checkout process
            } else if (response.message === "Some items in your cart have insufficient stock.") {
                // Display a toast notification for insufficient stock
                // toast.error("Some items in your cart have insufficient stock.");
                toast.error("Some items in your cart have insufficient stock.");
                setCanProceed(false);
                alert(`${response.stockIssues.map((issue) => issue.productName).join(", ")} in your cart have insufficient stock.`);
            }
        } catch (error) {
            console.error('Error checking stock:', error);
            toast.error('Failed to check stock. Please try again later.');
            setCanProceed(false);
        }
    };

    return (
        <Stack direction={"column"} className={styles.checkout} style={{ marginBottom: "30px" }}>
            <Stack gap={2} sx={{ marginBottom: "60px" }}>
                <Button variant="outlined" className={styles.outbutton}>Return Policy</Button>
            </Stack>
            <Stack direction={"row"} sx={{ justifyContent: "space-between", paddingRight: "20px", }}>
                <Stack sx={{ width: "auto", alignItems: "flex-start" }}>
                    <Typography className={styles.pricing}>Subtotal</Typography>
                    <Typography className={styles.pricing}>Delivery</Typography>
                </Stack>
                <Stack sx={{ width: "auto", alignItems: "flex-end" }}>
                    <Typography className={styles.pricing}>₹ {total}</Typography>
                    <Typography className={styles.pricing}>₹ {delivery}</Typography>
                </Stack>
            </Stack>
            <Typography className={styles.linebreak}></Typography>
            <Stack direction={"row"} sx={{ justifyContent: "space-between", paddingRight: "20px", alignItems: "flex-end" }}>
                <Typography className={styles.finalpricing}>Grand Total</Typography>
                <Typography className={styles.finalpricing}>₹ {total + delivery}</Typography>
            </Stack>
            <Button variant="contained" className={styles.checkoutbtn} onClick={handleCheckout}>
                {canProceed ? (
                    <Link href="/checkout" style={{ width: '100%', height: '100%', borderRadius: '5px', padding: '7px 0' }} sx={{textDecoration: 'none'}}>
                        CHECKOUT
                    </Link>
                ) : (
                    <span style={{ width: '100%', height: '100%', borderRadius: '5px', padding: '7px 0', display: 'block', textAlign: 'center', color: '#ffffff' }}>
                        CHECKOUT
                    </span>
                )}
            </Button>
            <Strip />
        </Stack>
    );
};

export default Checkout;
