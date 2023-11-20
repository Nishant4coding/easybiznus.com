import React, { useState } from 'react'
import { Button, Box, Stack, Typography } from '@mui/material';
import { IonIcon } from '@ionic/react';
import { arrowForwardSharp, heart, heartOutline, help, helpCircle, helpCircleOutline, trashOutline } from 'ionicons/icons';
import Image from 'next/image';
import { Shoe6 } from '@/assets/svg';
import styles from '../try.module.css';
import global from '@/global.module.css';

const Header = () => {
  const [changepin, setChangePin] = useState(true);
  const toggleSetPin = () => setChangePin(!changepin);

  return (
    <Stack gap={5}>
      <Stack gap={2}>
        <Typography sx={{ fontWeight: '900', letterSpacing: '0px' }}>TRY & BUY</Typography>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', border: '1px solid #AEAEAE', borderRadius: '10px', padding: '10px' }}>
          <Stack>
            <Typography className={styles.pinText}>
              Deliver to:{" "}
              <Typography sx={{ fontSize: '14px', display: 'inline', fontWeight: '700', }}>Harsh Tyagi, 400037</Typography>
            </Typography>
            <Typography className={styles.pinText}>634, Mahatma Gandhi Road, Fort, Mumbai</Typography>
          </Stack>
          {
            changepin ?
              <Typography onClick={toggleSetPin} className={styles.pinChange}>CHANGE</Typography> :
              <Typography onClick={toggleSetPin} style={{ color: '#1BCFB4' }} className={styles.pinChange}>OK</Typography>
          }
        </Stack>
      </Stack>

      <Stack gap={2}>
        <Typography sx={{ fontWeight: '600', display: 'flex', gap: '5px', alignItems: 'center' }}>
          TRY & BUY DETAILS
          <IonIcon icon={helpCircleOutline} style={{ fontSize: '25px', color: "#757575" }} />
        </Typography>
        <Stack sx={{}}>
          {
            detailsArray.map((item, index) => (
              <Stack direction={"row"} gap={0.5}>
                <Stack>
                  <Typography sx={{ fontSize: '14px', color: '#3F3F3F' }}>{item.sno}.</Typography>
                </Stack>
                <Stack>
                  <Typography sx={{ fontSize: '14px', color: '#3F3F3F' }}>{" "}{item.title}</Typography>
                </Stack>
              </Stack>
            ))
          }
        </Stack>
        <Typography sx={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#7CC0FE', fontSize: '14px' }}>
          Read More
          <IonIcon icon={arrowForwardSharp} />
        </Typography>
      </Stack>

      <Stack gap={2} sx={{ borderBottom: '2px solid #ECE6F0', paddingBottom: '15px' }}>
        <Typography sx={{ fontWeight: '900', }}>Selected Items</Typography>
        <Stack gap={3} direction="column" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {
            cardArray.map((item, index) => (
              <Card key={index} data={item} />
            ))
          }
        </Stack>
      </Stack>

      <Stack sx={styles.mobileBillingContainer}>
        <Typography className={styles.mobileSubHead}>Try & Buy Charges</Typography>
        <Stack gap={10} direction={"row"} sx={{ width: '100%', justifyContent: 'space-evenly', padding: '10px', borderBottom: '2px dotted #000' }}>
          <Stack gap={1}>
            <Typography className={styles.mobileBilling}>Delivery Charges :</Typography>
            <Typography className={styles.mobileBilling}>Total MRP :</Typography>
            <Typography className={styles.mobileBilling}>Discount :</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography className={styles.mobileBilling}>₹ 0.00</Typography>
            <Typography className={styles.mobileBilling}>₹ 0.00</Typography>
            <Typography className={styles.mobileBilling}>₹ 0.00</Typography>
          </Stack>
        </Stack>
        <Stack gap={10} direction={"row"} sx={{ width: '100%', justifyContent: 'space-evenly', padding: '10px', }}>
          <Stack gap={1}>
            <Typography className={styles.mobileBilling}>Current Total :</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography className={styles.mobileBilling}>₹ 0.00</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack sx={{ alignItems: 'center' }}>
        <Button variant="contained" className={global.mobileButton}>
          CONTINUE
        </Button>
      </Stack>
    </Stack>
  )
}

export default Header;

const detailsArray = [
  {
    sno: 1,
    title: 'You can order these items for trial. Our Courier will bring the inventory to your home.'
  },
  {
    sno: 2,
    title: 'You can try them at your home and decide what to keep.'
  },
  {
    sno: 3,
    title: 'Pay for the items along with the delivery charge, and return the rest on spot.'
  }
]


export const Card = ({ data }) => {
  const { image, title, category, subcategory, size, price } = data;
  const toggleWish = () => setWish(!wish);
  const [wish, setWish] = useState(false);

  return (
    <Stack direction={"row"} gap={1} className={styles.mobileCard}>

      <Box className={styles.mobileCardImage}>
        <Image src={image} alt="Product" className={global.image} />
      </Box>

      <Stack gap={0.5}>
        <Typography className={styles.mobileCardTitle}>{title}</Typography>
        <Typography sx={{ fontSize: '13px' }}>{category}</Typography>
        <Typography sx={{ fontSize: '13px' }}>{subcategory}</Typography>
        <Typography sx={{ fontSize: '13px' }}>Size {size}</Typography>
      </Stack>

      <Box className={styles.mobileCardPriceSection} >
        <Stack direction={"row"} gap={0.5}>
          {
            wish ?
              <IonIcon onClick={toggleWish} icon={heart} className={styles.mobileCardIcon} /> :
              <IonIcon onClick={toggleWish} icon={heartOutline} className={styles.mobileCardIcon} />
          }
          <IonIcon icon={trashOutline} className={styles.mobileCardTrashIcon} />
        </Stack>
        <Stack gap={0}>
          <Typography className={styles.moileCardPrice}>{price}</Typography>
          <Typography className={styles.mobileCardTaxTitle}>Incl. of taxes</Typography>
        </Stack>
      </Box>

    </Stack>
  )
}

const cardArray = [
  {
    image: Shoe6,
    title: 'Mercedes AMG Petronas F1, Wired Run Unisex Sneakers',
    category: 'Men’s Shoes',
    subcategory: 'Puma White-Silver',
    size: '11',
    price: '₹3,499'
  },
  {
    image: Shoe6,
    title: 'Mercedes AMG Petronas F1, Wired Run Unisex Sneakers',
    category: 'Men’s Shoes',
    subcategory: 'Puma White-Silver',
    size: '11',
    price: '₹3,499'
  },
  {
    image: Shoe6,
    title: 'Mercedes AMG Petronas F1, Wired Run Unisex Sneakers',
    category: 'Men’s Shoes',
    subcategory: 'Puma White-Silver',
    size: '11',
    price: '₹3,499'
  },
]

