import React, { useState } from 'react'
import { Button, Box, Stack, Typography } from '@mui/material';
import { IonIcon } from '@ionic/react';
import { arrowForwardSharp, heart, heartOutline, help, helpCircle, helpCircleOutline, trashOutline } from 'ionicons/icons';
import Image from 'next/image';
import { Delete, Shoe6 } from '@/assets/svg';

const Header = () => {
  const [changepin, setChangePin] = useState(true);
  const toggleSetPin = () => setChangePin(!changepin);

  return (
    <Stack gap={5}>
      <Stack gap={2}>
        <Typography sx={{ fontWeight: '900', letterSpacing: '-0.5px' }}>TRY & BUY</Typography>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', border: '1px solid #AEAEAE', borderRadius: '10px', padding: '10px' }}>
          <Stack>
            <Typography sx={{ fontSize: '13px', color: '#414141' }}>
              Deliver to:{" "}
              <Typography sx={{ fontSize: '14px', display: 'inline', fontWeight: '700', }}>Harsh Tyagi, 400037</Typography>
            </Typography>
            <Typography sx={{ color: '#414141', fontSize: '13px' }}>634, Mahatma Gandhi Road, Fort, Mumbai</Typography>
          </Stack>
          {
            changepin ?
              <Typography onClick={toggleSetPin} style={{ fontSize: '13px', color: '#F55E53', fontWeight: '600' }}>CHANGE</Typography> :
              <Typography onClick={toggleSetPin} style={{ fontSize: '13px', color: '#1BCFB4', fontWeight: '600' }}>OK</Typography>
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

      <Stack sx={{ alignItems: 'center', maxWidth: '400px', width: '90%', minWidth: '300px', margin: "0px auto" }}>
        <Typography sx={{ width: '100%', textAlign: 'center', fontWeight: '600', fontSize: '20px', marginBottom:'10px' }}>Try & Buy Charges</Typography>
        <Stack gap={10} direction={"row"} sx={{ width: '80%', justifyContent: 'space-evenly', padding: '10px', borderBottom: '2px dotted #000' }}>
          <Stack gap={1}>
            <Typography sx={{ fontWeight: '700' }}>Delivery Charges :</Typography>
            <Typography sx={{ fontWeight: '700' }}>Total MRP :</Typography>
            <Typography sx={{ fontWeight: '700' }}>Discount :</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography sx={{ fontWeight: '700' }}>₹ 0.00</Typography>
            <Typography sx={{ fontWeight: '700' }}>₹ 0.00</Typography>
            <Typography sx={{ fontWeight: '700' }}>₹ 0.00</Typography>
          </Stack>
        </Stack>
        <Stack gap={10} direction={"row"} sx={{ width: '80%', justifyContent: 'space-evenly', padding: '10px', }}>
          <Stack gap={1}>
            <Typography sx={{ fontWeight: '700' }}>Current Total :</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography sx={{ fontWeight: '700' }}>₹ 0.00</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack sx={{alignItems:'center'}}>
        <Button variant="contained" style={{backgroundColor:'#0D1A26', color:'#fff', borderRadius:'10px', maxWidth:'300px', width:'80%', minWidth:'200px'}}>
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
    <Stack direction={"row"} gap={1} sx={{ alignItems: 'center', height: '120px', padding: '10px 0' }}>

      <Box style={{ height: '100px', width: '180px', overflow: 'hidden', borderRadius: '10px' }}>
        <Image src={image} alt="Product" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
      </Box>

      <Stack gap={0.5}>
        <Typography sx={{ fontWeight: '600', fontSize: '13px' }}>{title}</Typography>
        <Typography sx={{ fontSize: '13px' }}>{category}</Typography>
        <Typography sx={{ fontSize: '13px' }}>{subcategory}</Typography>
        <Typography sx={{ fontSize: '13px' }}>Size {size}</Typography>
      </Stack>

      <Box style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', alignItems: 'center' }} >
        <Stack direction={"row"} gap={0.5}>
          {
            wish ?
              <IonIcon onClick={toggleWish} icon={heartOutline} style={{ color: '#F55E53', fontSize: '30px' }} /> :
              <IonIcon onClick={toggleWish} icon={heart} style={{ color: '#F55E53', fontSize: '30px' }} />
          }
          <IonIcon icon={trashOutline} style={{ color: '#C73232', fontSize: '25px' }} />
        </Stack>
        <Stack gap={0}>
          <Typography sx={{ fontWeight: '600', fontSize: '23px' }}>{price}</Typography>
          <Typography sx={{ fontSize: '12px', width: 'fit-content', whiteSpace: 'nowrap' }}>Incl. of taxes</Typography>
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

