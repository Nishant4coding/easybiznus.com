"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './card.module.css';
import Image from "next/image";
import { CardD, Pen, Delete } from '@/assets/svg/index';
import { checkmarkCircleOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { useState } from "react";
import DeleteModal from "@/components/Cart/Delete";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ data }) => {
    const { title, color, size, sku_code, salePrice, id: cartItemId, primaryImage } = data;
    // console.log("this is data", data)
    const [qty, setQty] = useState(1);
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
        <Stack direction={"row"} gap={2} className={styles.container}>
            <Stack direction={"column"}>
                <Image src={data.SellerVariant.SellerProduct.Product.images[0]} alt={"product"} width={200} height={200} />
            </Stack>
            <Stack direction={"column"} gap={1}>
                <Stack direction={"column"}>
                    <Typography className={styles.prodname}>{title}</Typography>
                    <Typography className={styles.subtitle}>Color: {color}</Typography>
                    <Typography className={styles.subtitle}>Size: {size}</Typography>
                    <Typography className={styles.subtitle}>SKU CODE: {sku_code}</Typography>
                </Stack>
                <Box sx={{ width: "70px" }}>
                    <FormControl fullWidth sx={dropdown}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
            <Stack direction={"column"} sx={{ width: "30%", alignItems: "flex-end" }}>
                <Stack direction={"column"} style={{ justifyContent: 'space-between', height: '90%' }}>
                    <Stack>
                        <Typography className={styles.price}>{salePrice}</Typography>
                        <Typography className={styles.stock} style={{ color: '#1BCFB4' }}>
                            <IonIcon icon={checkmarkCircleOutline} style={{ color: '#1BCFB4' }} />
                            In-Stock
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} gap={2} sx={{ justifyContent: "flex-end" }}>
                        <Image src={Pen} alt={"pen"} style={{ cursor: "pointer" }} />
                        <Image
                            src={Delete}
                            alt={"delete"}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDeleteOpen(cartItemId)}  // Correct event handler
                        />
                    </Stack>
                </Stack>

                <DeleteModal
                    open={deleteModalOpen}
                    handleClose={handleDeleteClose}
                    cartItemId={selectedCartItemId}
                />
            </Stack>
        </Stack>
    );
};

export default Card;

const dropdown = {
    '& label.Mui-focused': {
        color: '#0D1A26',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#0D1A26',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: "0px",
        color: "#000",
        height: "42px",
        fontSize: "13px",
        '& fieldset': {
            border: '1px solid #0D1A26',
        },
        '&:hover fieldset': {
            border: '1px solid #0D1A26',
        },
        '&.Mui-focused fieldset': {
            border: '1px solid #0D1A26',
        },
    },
};
