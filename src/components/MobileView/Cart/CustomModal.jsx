import * as React from 'react';
import { Stack, Box, Typography, StyledBox, Button } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import styles from './cart.module.css';
import { CrossIcon, RigthArrowIcon, AddIconNoBackg } from '@/assets/svg/index';
import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { caretForward, home } from 'ionicons/icons';


const CustomModal = ({ openModal, setOpenModal, data, modalTitle }) => {
  const router = useRouter();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenModal(open);
  };

  const [select, setSelect]= useState(0);
  const handleSelect=(val)=>setSelect(val);

  return (
    <>
      <SwipeableDrawer
        anchor={"bottom"}
        open={openModal}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{borderRadius:'10px 10px 0 0'}}
        >
          <Stack paddingX={2} direction={"row"} justifyContent={"space-between"} alignItems={"center"} paddingY={2}>
            <Typography sx={{ fontSize: "15px", fontWeight: "600px" }}>{modalTitle}</Typography>
            <Image src={CrossIcon} alt='cross icon' />
          </Stack>

          <Box marginBottom={3}>
            {data?.map((item, id) => {
              return (
                <Stack onClick={()=>{
                  handleSelect(id)
                }} key={id} marginY={"5px"} paddingX={2} paddingY={1} className={styles.modalCon} style={id===select?{backgroundColor:'#0D1A26'}:{}}>
                  <Stack direction={"row"} sx={{alignItems:'center'}} gap={2} onClick={() => router.push('/address')}>
                    {/* <Image src={item?.icon} alt='Icon' style={id===select?{color:'#fff'}:{}}/> */}
                    <IonIcon icon={item?.icon} style={id===select?{color:'#fff',fontSize:'22px'}:{fontSize:'22px'}}/>
                    <Stack >
                      <Typography style={id===select?{color:'#fff'}:{}} fontSize={"16px"}>{item?.title}</Typography>
                      <Typography style={id===select?{color:'#fff'}:{}} fontSize={"9px"} sx={{ cursor: "pointer" }}>{item?.address}</Typography>
                    </Stack>
                  </Stack>
                  <IonIcon icon={caretForward} style={id===select?{color:'#fff'}:{}} />
                </Stack>
              )
            })}
          </Box>
          
        </Box>
      </SwipeableDrawer>
    </>
  );
}


export default CustomModal;