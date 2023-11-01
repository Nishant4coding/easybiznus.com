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

const Card = ({ data, edit = true, handleOpen }) => {
    const { title, color, size, sku_code, price } = data;
    const [qty, setQty]=useState(1);

    return (
        <Stack direction={"row"} gap={2} className={styles.container}>
            <Stack direction={"column"}>
                <Image src={CardD} width={200} />
                <Typography className={styles.stock}>
                    <IonIcon icon={checkmarkCircleOutline}></IonIcon>
                    In-Stock
                </Typography>
            </Stack>
            <Stack direction={"column"} gap={1}>
                <Stack direction={"column"}>
                    <Typography className={styles.prodname}>{title}</Typography>
                    <Typography className={styles.subtitle}>Color:{color}</Typography>
                    <Typography className={styles.subtitle}>Size: {size}</Typography>
                    <Typography className={styles.subtitle}>SKU CODE: {sku_code}</Typography>
                </Stack>
                <Box sx={{ width: "70px" }}>
                    <FormControl fullWidth sx={dropdown}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={qty}
                            onChange={(e)=>setQty(e.target.value)}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
            <Stack direction={"column"} sx={{ width: "30%", alignItems: "flex-end" }}>
                <Stack direction={"column"} gap={1}>
                    <Typography className={styles.price}>{price}</Typography>
                    <Stack direction={"row"} gap={2} sx={{ justifyContent: "flex-end" }}>
                        {edit && <Image src={Pen} style={{ cursor: "pointer" }} />}
                        <Image src={Delete} style={{ cursor: "pointer" }} onClick={handleOpen}/>
                    </Stack>
                </Stack>

                {edit &&
                    <Button variant="contained" className={styles.button}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#0D1A26",
                            },
                            marginTop: "40px"
                        }}
                    >
                        ADD TO CART
                    </Button>
                }


            </Stack>
        </Stack>
    )
}

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
}