import { Stack, Typography, Box, Button, FormControl, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/components/ProductPage/product.module.css';
import { IonIcon } from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';

const Product = () => {
    const [qty, setQty] = useState(1);
    const [wish, setWish] = useState(false);
    const [size, setSize] = useState(0);
    const handleSetWish = () => setWish(!wish);
    const handleSize = (value) => setSize(value)

    return (
        <Box>
            <Stack direction={"row"} sx={{ justifyContent: 'space-evenly' }}>
                <Typography className={styles.heading} style={{ fontSize: '22px', width: 'fit-content' }}>Mercedes AMG Petronas F1 Wired Run Unisex Sneakers</Typography>
                {
                    wish ?
                        <IonIcon icon={heart} style={{ color: '#F55E53', fontSize: '65px' }} onClick={handleSetWish}></IonIcon> :
                        <IonIcon icon={heartOutline} style={{ color: '#F55E53', fontSize: '65px' }} onClick={handleSetWish}></IonIcon>
                }
            </Stack>

            <Stack direction={"row"} style={{ justifyContent: 'space-between' }}>
                <Stack gap={0.8}>
                    <Typography className={styles.sp2}>₹3,499</Typography>
                    <Typography className={styles.mrp2}>₹6,999</Typography>
                    <Typography style={{ fontSize: '15px', color: '#6C6C6C' }}>Prices include GST</Typography>
                </Stack>
                <Stack gap={1}>
                    <Button className={styles.button}>
                        + ADD TO CART
                    </Button>
                    <Button className={styles.button}>
                        ADD TO TRY ON
                    </Button>
                </Stack>
            </Stack>

            <Stack sx={{ margin: '20px' }}>
                <Stack direction={"row"} gap={0.5} sx={{ alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: "600", fontSize: '18px' }}>Color: </Typography>
                    <Box sx={{ width: "fit-content", height: 'fit-content' }}>
                        <FormControl fullWidth sx={dropdown}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                            >
                                <MenuItem value={1}>White</MenuItem>
                                <MenuItem value={2}>Black</MenuItem>
                                <MenuItem value={3}>Red</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>
                <Typography>PUMA White-PUMA Silver</Typography>
            </Stack>

            <Stack sx={{ padding: '20px 0px', borderTop:'1.5px solid #E5E7EB', borderBottom:'1.5px solid #E5E7EB' }} gap={1.3}>
                <Stack gap={1} direction={"row"} sx={{ flexWrap: 'wrap' }}>
                    {
                        sizeArray.map((item, index) => (
                            <Typography onClick={() => handleSize(index)} key={index} className={size === index ? styles.selectedsize : styles.sizeboxmobile}>{item.size}</Typography>
                        ))
                    }
                </Stack>
                <Link href="#" style={{ fontWeight: '600', fontSize: '12px' }}>SIZE GUIDE</Link>
            </Stack>
        </Box>
    )
}

export default Product;


const dropdown = {
    '& label.Mui-focused': {
        color: '#0D1A26',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'none',
    },
    '& .MuiOutlinedInput-root': {
        padding: '0px',
        borderRadius: "5px",
        color: "#000",
        height: "25px",
        fontSize: "13px",
        backgroundColor: '#F0F0F0',
        '& fieldset': {
            border: 'none',
        },
        '&:hover fieldset': {
            border: 'none',
        },
        '&.Mui-focused fieldset': {
            border: 'none',
        },
    },
}

const sizeArray = [
    {
        size: 6,
        available: true
    },
    {
        size: 7,
        available: true
    },
    {
        size: 8,
        available: false
    },
    {
        size: 9,
        available: true
    },
    {
        size: 10,
        available: true
    },
    {
        size: 11,
        available: true
    },
    {
        size: 12,
        available: true
    }
];
