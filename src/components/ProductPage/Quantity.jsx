"use client";
import { Box, Stack, TextField, Button } from "@mui/material";
import { closeCircleOutline, heart, heartOutline, addOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useState } from "react";
import styles from './product.module.css';

const Quantity = ({handleOpen,setPopTitle }) => {
    const [wish, setWish] = useState(false);
    const addedToWishlist=()=>{
        setPopTitle({
            title:"Added to wishlist",
            button:"Go to Wishlist",
            path:"/wishlist"
        });
        handleOpen();
    }
    return (
        <Stack direction={"row"} gap={2} sx={{ marginTop: "35px", height:"120px", alignItems:"flex-start", justifyContent:"space-between" }}>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: "10px", height:"100%" }}>
                <Stack direction="row" sx={{ position: "relative" }}>
                    <TextField id="outlined-basic" label="Quantity" variant="outlined" className={styles.qtyinput} sx={input}>
                    </TextField>
                    <IonIcon icon={closeCircleOutline} size={"medium"} style={{ position: "absolute", top: "32%", right: "10px", cursor: "pointer" }}
                    ></IonIcon>
                </Stack>
                <IonIcon icon={wish ? heart : heartOutline} size="large" style={{ color: "#F55E53", cursor: "pointer" }}
                    onClick={() =>{ 
                        setWish(!wish); 
                        wish?null: addedToWishlist();
                    }}
                ></IonIcon>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column", gap:"10px", height:"100%"}}>
                <Box className={styles.button} onClick={()=>{
                    setPopTitle({
                        title:"Added to Cart",
                        button2:"View Bag",
                        button:"Checkout",
                        path2:"/cart",
                        path:"/checkout"
                    });
                    handleOpen();
                }}>
                    <IonIcon icon={addOutline}></IonIcon>
                    ADD TO CART
                </Box>
                <Box className={styles.button} onClick={()=>{
                    setPopTitle({
                        title:"Added to Try On",
                        button:"Go to Try On",
                        path:"/trynbuy"
                    });
                    handleOpen();
                }}>
                    <IonIcon icon={addOutline}></IonIcon>
                    ADD TO TRY ON
                </Box>
            </Box>
        </Stack>
    )
}

export default Quantity;

const input = {
    '& label.Mui-focused': {
        color: '#0D1A26',
        fontWeight: "700",
        marginTop: "0px"
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        height: "45px",
        '& fieldset': {
            border: '1px solid #0D1A26',
            borderRadius: "10px",
        },
        '&:hover fieldset': {
            borderColor: '#0D1A26',
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #0D1A26',
            borderRadius: "10px",
        },
    },
    '& label': {
        marginTop: "-4px",
        color: '#0D1A26',
        fontSize:"13px"
    }
};

