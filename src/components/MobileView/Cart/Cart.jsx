"use client";
import { Stack, Typography, Button, Box } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { AddIcon, Shoe6, DeleteIconRed } from "@/assets/svg/index";
import { IonIcon } from "@ionic/react";
import { heart, heartOutline } from "ionicons/icons";
import styles from "./cart.module.css";
import CustomModal from "./CustomModal";
import Header from "../CustomHeader/Header";
import { businessOutline, home, storefront, add } from "ionicons/icons";
import PopupAlert from "../Snackbar/PopupAlert";

const Cart = (data) => {
    const [openModal, setOpenModal] = useState(false);

    console.log(data);

    let quantity = 1;
    let amnt = {
        subtotal: "3,499",
        delivery: 40,
        grandTotal: 3539,
    };

    return (
        <Stack sx={{ marginTop: "55px", minHeight: "90svh" }}>
            <Header title={"Cart"} count={1} />
            <Stack padding={3} direction={"row"} gap={2}>
                <Stack alignItems={"center"}>
                    <Image src={Shoe6} alt="shoe" width={82} height={82} />
                    <Stack direction={"row"} gap={2}>
                        <Image src={AddIcon} alt="icon" />
                        <Typography>{quantity}</Typography>
                        <Image src={AddIcon} alt="icon" />
                    </Stack>
                </Stack>
                {Array.isArray(data.items) && data.items.length > 0 ? (
                    data.items.map((item, index) => <Card cartData={item} key={index} />)
                ) : (
                    <Typography>No items in the cart.</Typography>
                )}
            </Stack>

            <Stack sx={{ padding: "15px", marginBottom: "50px" }}>
                <Stack gap={0} paddingX={1}>
                    <Stack
                        className={styles.subTotal}
                        paddingX={1}
                        borderTop={"1px solid #9E9898"}
                    >
                        <Typography>Subtotal</Typography>
                        <Typography>₹ {amnt.subtotal}</Typography>
                    </Stack>
                    <Stack
                        className={styles.subTotal}
                        paddingX={1}
                        paddingY={2}
                        borderBottom={"1px solid black"}
                    >
                        <Typography>Delivery</Typography>
                        <Typography>₹ {amnt.delivery}</Typography>
                    </Stack>
                </Stack>
                <Stack className={styles.grandTotal} paddingX={1}>
                    <Typography>Grand Total</Typography>
                    <Typography>₹ {amnt.grandTotal}</Typography>
                </Stack>
            </Stack>
            <Stack
                alignItems={"center"}
                sx={{ position: "absolute", bottom: "20px", width: "100%" }}
            >
                <Button className={styles.btn} onClick={() => setOpenModal(!openModal)}>
                    CHECKOUT
                </Button>
            </Stack>

            {openModal && (
                <CustomModal
                    data={data}
                    modalTitle={"Choose a Delivery Address"}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            )}
        </Stack>
    );
};

const Card = (cartData) => {
    console.log(cartData);
    const [wish, setWish] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);
    const handleCloseMobile = () => setOpenMobile(false);
    const handleOpenMobile = () => setOpenMobile(true);

    return (
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
            <Stack sx={{ width: "65%" }}>
                <Typography className={styles.title}>
                    Mercedes AMG Petronas F1 ,Wired Run Unisex Sneakers
                </Typography>
                <Typography className={styles.subTitle}>Men’s Shoes</Typography>
                <Typography className={styles.subTitle}>Puma White-Silver</Typography>
                <Typography className={styles.subTitle}>SIze 11</Typography>
            </Stack>
            <Stack gap={2}>
                <Stack direction={"row"} gap={1}>
                    <IonIcon
                        icon={wish ? heart : heartOutline}
                        size="large"
                        style={{ color: "#F55E53", cursor: "pointer" }}
                        onClick={() => {
                            setWish(!wish);
                            // wish?null: addedToWishlist();
                        }}
                    ></IonIcon>
                    <Image
                        src={DeleteIconRed}
                        alt=""
                        style={{ color: "red" }}
                        onClick={handleOpenMobile}
                    />
                </Stack>

                <Stack>
                    <Typography className={styles.totalPrice}> ₹3,499</Typography>
                    <Typography className={styles.subtxt}>Incl. of taxes</Typography>
                </Stack>
            </Stack>
            {openMobile && (
                <PopupAlert
                    open={openMobile}
                    handleClose={handleCloseMobile}
                    title={"Item Deleted Successfully"}
                    path={"/product"}
                />
            )}
        </Stack>
    );
};

const data = [
    {
        title: "Home",
        icon: home,
        address: "1067, Verona Mahagun Delhi (201501)",
    },
    {
        title: "Apartment",
        icon: businessOutline,
        address: "112, SuperTeck Delhi (201501)",
    },
    {
        title: "Office",
        icon: storefront,
        address: "EliteCodes Office, Banglore",
    },
    {
        title: "Add New Address",
        icon: add,
    },
];

export default Cart;
