"use client"
import { Stack, Typography, Button, Box } from '@mui/material'
import React, { useState } from 'react';
import Image from 'next/image';
import { AddIcon, Shoe6, DeleteIconRed } from '@/assets/svg/index';
import { IonIcon } from '@ionic/react';
import { heart, heartOutline, } from 'ionicons/icons';
import styles from './cart.module.css'
import CustomModal from './CustomModal';
import global from '@/global.module.css'
import { HomeIcon, ApartmentIcon, OfficeIcon, AddIconNoBackg } from '@/assets/svg/index';
import Header from '../CustomHeader/Header';


const Cart = () => {
    const [openModal, setOpenModal] = useState(false);

    let quantity = 1;
    let amnt = {
        subtotal: "3,499",
        delivery: 40,
        grandTotal: 3539
    }

    return (
        <Stack sx={{ marginTop: "55px" }}>
            <Header title={"Cart"} count={1} />
            <Stack padding={3} direction={"row"} gap={2}>
                <Stack alignItems={"center"}>
                    <Image src={Shoe6} alt='shoe' width={82} height={82} />
                    <Stack direction={"row"} gap={2} >
                        <Image src={AddIcon} alt='icon' />
                        <Typography>{quantity}</Typography>
                        <Image src={AddIcon} alt='icon' />
                    </Stack>
                </Stack>

                <Card />

            </Stack>

            <Stack sx={{padding:'15px'}}>
                <Stack gap={0} paddingX={1}>
                    <Stack className={styles.subTotal} paddingX={1} borderTop={"1px solid #9E9898"}>
                        <Typography>Subtotal</Typography>
                        <Typography>₹ {amnt.subtotal}</Typography>
                    </Stack>
                    <Stack className={styles.subTotal} paddingX={1} paddingY={2} borderBottom={"1px solid black"}>
                        <Typography>Delivery</Typography>
                        <Typography>₹ {amnt.delivery}</Typography>
                    </Stack>

                </Stack>
                <Stack className={styles.grandTotal} paddingX={1} >
                    <Typography>Grand Total</Typography>
                    <Typography>₹ {amnt.grandTotal}</Typography>
                </Stack>
            </Stack>
            <Stack alignItems={"center"}>
                <Button className={styles.btn} onClick={() => setOpenModal(!openModal)}>CHECKOUT</Button>
            </Stack>
            <Box className={global.mobile}>
                {openModal && <CustomModal data={data} modalTitle={"Choose a Delivery Address"} openModal={openModal} setOpenModal={setOpenModal} />}
            </Box>
        </Stack>
    )
}


const Card = () => {
    const [wish, setWish] = useState(false);

    return (
        <Stack direction={"row"}>

            <Stack sx={{ width: "175px" }}>
                <Typography className={styles.title} >Mercedes AMG Petronas F1 ,Wired Run Unisex Sneakers</Typography>
                <Typography className={styles.subTitle}>Men’s Shoes</Typography>
                <Typography className={styles.subTitle}>Puma White-Silver</Typography>
                <Typography className={styles.subTitle}>
                    SIze 11
                </Typography>
            </Stack>
            <Stack gap={2}>
                <Stack direction={"row"} gap={1}>
                    <IonIcon icon={wish ? heart : heartOutline} size="large" style={{ color: "#F55E53", cursor: "pointer" }}
                        onClick={() => {
                            setWish(!wish);
                            // wish?null: addedToWishlist();
                        }}
                    ></IonIcon>
                    <Image src={DeleteIconRed} style={{ color: "red" }} />
                </Stack>

                <Stack >
                    <Typography className={styles.totalPrice}> ₹3,499</Typography>
                    <Typography className={styles.subtxt}>Incl. of taxes</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

const data = [
    {
        title: "Home",
        icon: HomeIcon,
        address: "1067, Verona Mahagun Delhi (201501)",
    },
    {
        title: "Apartment",
        icon: ApartmentIcon,
        address: "112, SuperTeck Delhi (201501)",
    },
    {
        title: "Office",
        icon: OfficeIcon,
        address: "EliteCodes Office, Banglore",
    },
    {
        title: "Add New Address",
        icon: AddIconNoBackg,
    },

]

export default Cart;