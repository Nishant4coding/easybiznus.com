"use client"
import { Stack, Typography, Box, Button, FormControl, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/components/ProductPage/product.module.css';
import { IonIcon } from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';
import Pincode from '../Pincode';
import { PinBlack } from '@/assets/svg';
import Image from 'next/image';
import global from '@/global.module.css';
import { addToCart } from '@/Redux/Features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const Product = ({ handleOpen }) => {
    const [qty, setQty] = useState(1);
    const [wish, setWish] = useState(false);
    const [size, setSize] = useState(0);
    const [pin, setPin] = useState('201016');
    const [changepin, setChangepin] = useState(true);
    const dispatch = useDispatch(); 

    const toggleWish = () => setWish(!wish);
    const handleSize = (value) => setSize(value);
    const toggleSetPin = () => setChangepin(!changepin);
    const handlePin = (e) => setPin(e.target.value);

    const handleAddToCart = () => {
        const productDetails = {
          productId: id, 
          quantity: qty,
          price,
          salePrice: price, 
          sellerId: 'e21796a6-8af1-49b7-a4ec-6c65e62786a8', 
          AccountId: '4c27d1b6-15fd-4554-8ff5-970fcc319665'
        };
      
        console.log('Dispatching addToCart with:', productDetails);
        dispatch(addToCart(productDetails));
      };

    return (
        <Box>
            <Stack direction={"row"} sx={{ justifyContent: 'space-evenly' }}>
                <Typography className={global.headingMobile} style={{ fontSize: '22px', marginBottom: '15px' }}>Mercedes AMG Petronas F1 Wired Run Unisex Sneakers</Typography>
                {
                    wish ?
                        <IonIcon icon={heart} className={styles.wishIcon} onClick={toggleWish}></IonIcon> :
                        <IonIcon icon={heartOutline} className={styles.wishIcon} onClick={toggleWish}></IonIcon>
                }
            </Stack>

            <Stack direction={"row"} style={{ justifyContent: 'space-between' }}>
                <Stack gap={0.8}>
                    <Typography className={styles.sp2}>₹3,499</Typography>
                    <Typography className={styles.mrp2}>₹6,999</Typography>
                    <Typography className={styles.taxDeclaration}>Prices include GST</Typography>
                </Stack>
                <Stack gap={1}>
                    <Button className={global.button} variant='contained' onClick={handleOpen} style={{ fontSize: '13px' }}>
                        <Typography style={{ fontWeight: '600' }} onClick={handleAddToCart}>+</Typography>
                        ADD TO CART
                    </Button>
                    <Button variant="contained" className={global.button} style={{ fontSize: '13px' }}>
                        ADD TO TRY ON
                    </Button>
                </Stack>
            </Stack>

            <Stack className={styles.colorContainer}>
                <Stack direction={"row"} gap={0.5} sx={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Typography className={styles.mobileSubTitle} style={{ width: 'fit-content' }}>Color: </Typography>
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

            <Stack className={""} sx={{ padding: '20px 0px', borderTop: '1.5px solid #E5E7EB', borderBottom: '1.5px solid #E5E7EB' }} gap={1.3}>
                <Stack gap={1} direction={"row"} sx={{ flexWrap: 'wrap' }}>
                    {
                        sizeArray.map((item, index) => (
                            <Typography onClick={() => handleSize(index)} key={index} className={size === index ? styles.selectedsize : styles.sizeboxmobile}>{item.size}</Typography>
                        ))
                    }
                </Stack>
                <Link href="#" style={{ fontWeight: '600', fontSize: '12px' }}>SIZE GUIDE</Link>
            </Stack>

            <Stack sx={{ margin: '10px 0px' }}>
                <Pincode btnwidth={"50%"} />
            </Stack>

            <Stack sx={{ padding: '10px 0', margin: '20px 0px', borderTop: '1.5px solid #E5E7EB', borderBottom: '1.5px solid #E5E7EB' }}>
                <Typography sx={{ fontSize: '13px' }}>
                    Estimate delivery in {" "}
                    <Link href="#" style={{ fontWeight: '600' }}>
                        3 days
                    </Link>
                </Typography>
                <Stack direction={"row"} sx={{ alignItems: 'center' }} gap={1}>
                    <Image alt="pin" src={PinBlack} />
                    <Stack direction={"row"} sx={{ justifyContent: 'space-between', alignItems: 'center', width: '85%' }}>
                        <Stack>
                            <Typography sx={{ fontSize: '20px' }}>Address</Typography>
                            {
                                changepin ?
                                    <Typography sx={{ fontSize: '16px', lineHeight: '25px' }}>Ghaziabad (201016)</Typography> :
                                    <input style={{ paddingLeft: '10px', outline: 'none', border: '1px solid #000', borderRadius: "3px" }} onChange={handlePin} type='text' value={pin}></input>
                            }
                        </Stack>
                        {
                            changepin ?
                                <Typography onClick={toggleSetPin} style={{ color: '#F55E53', fontWeight: '600' }}>Change</Typography> :
                                <Typography onClick={toggleSetPin} style={{ color: '#1BCFB4', fontWeight: '600' }}>OK</Typography>
                        }
                    </Stack>
                </Stack>
            </Stack>

            <Stack gap={2} sx={{ margin: '35px 0', marginBottom: '50px' }}>
                <Typography className={styles.mobileSubTitle}>Description</Typography>
                <Typography>Fit yourself out in true fan fashion with our Mercedes-AMG Petronas Motorsport F1 Wired</Typography>
                <Stack sx={{ paddingLeft: '30px' }}>
                    <Typography>Style: 306787_06</Typography>
                    <Typography>Color: PUMA White-PUMA Silver</Typography>
                </Stack>
                <Typography className={styles.support}>READ MORE</Typography>
            </Stack>

            <Stack gap={2} sx={{ margin: '35px 0' }}>
                <Typography className={styles.mobileSubTitle}>Shipping and Returns</Typography>
                <Typography sx={{ textAlign: 'justify', display: 'inline' }}>Free standard delivery on all orders and free return for all qualifying orders within {" "}
                    <Typography sx={{ fontWeight: '600', display: 'inline' }}>14 days of your order delivery date. {" "}</Typography>
                    Visit our {" "}
                    <Typography className={styles.support} sx={{ display: 'inline' }}>Return Policy</Typography>
                    {" "}for more information.
                </Typography>
                <Typography>For any queries, please contact Customer Service at +91 1800******* or via</Typography>
                <Typography className={styles.support}>customercare@showmato.com </Typography>
            </Stack>

            <Stack sx={{ padding: '25px', backgroundColor: '#EEEEEE' }}>
                <Stack gap={2} sx={{ margin: '25px 0', alignItems: 'center' }}>
                    <Typography className={styles.mobileSubTitle}>FEATURES & BENEFITS</Typography>
                    {
                        featuresArray.map((item, index) => (
                            <Typography key={index} sx={{ width: "85%", textAlign: 'left' }}>{item}</Typography>
                        ))
                    }
                </Stack>

                <Stack gap={2} sx={{ margin: '25px 0', }}>
                    <Typography className={styles.mobileSubTitle}>DETAILS</Typography>
                    <Stack gap={0.8} sx={{ width: 'fit-content', maxWidth: '95%', paddingLeft: '15px' }}>
                        {
                            detailsArray.map((item, index) => (
                                <Typography key={index}>{item}</Typography>
                            ))
                        }
                    </Stack>
                </Stack>

                <Stack gap={2} sx={{ margin: '25px 0', }}>
                    <Typography className={styles.mobileSubTitle}>Country of Origin</Typography>
                    <Typography>VN</Typography>
                </Stack>
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

const featuresArray = [
    "IMEVA: PUMA's material for a lightweight and comfortable feel",
    "SoftFoam+: PUMA's comfort sockliner for instant step-in and long-lasting comfort that provides soft cushioning every step of your day"
]

const detailsArray = [
    'Heel type: Flat',
    'Shoe width: Regular fit',
    'Heel-to-toe-drop: 0 mm',
    'Low boot profile',
    'Mesh upper',
    'IMEVA outsole',
    'Softfoam+ sockliner',
    'Lace closure',
    'PUMA Cat Logo at tongue',
    'Elastic gore across forefoot with bold Mercedes-AMG Petronas Motorsport branding'
]

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
