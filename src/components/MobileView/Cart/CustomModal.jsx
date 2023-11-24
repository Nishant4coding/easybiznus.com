import * as React from 'react';
import { Stack, Box, Typography, StyledBox, Button } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import styles from './cart.module.css';
import { CrossIcon, RigthArrowIcon, AddIconNoBackg } from '@/assets/svg/index';


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

  return (
    < >
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

        >
          <Stack paddingX={2} direction={"row"} justifyContent={"space-between"} alignItems={"center"} paddingY={1}>
            <Typography sx={{ fontSize: "15px", fontWeight: "600px" }}>{modalTitle}</Typography>
            <Image src={CrossIcon} alt='cross icon' />
          </Stack>
          <Box marginBottom={3}>
            {data?.map((item, id) => {
              return (
                <Stack key={id}  boxShadow={1} marginY={"5px"} paddingX={2} paddingY={1} className={styles.modalCon} >
                  <Stack direction={"row"} gap={2} onClick={() => router.push('/address')}>
                    <Image src={item?.icon} alt='Icon' />
                    <Stack >
                      <Typography fontSize={"16px"}>{item?.title}</Typography>
                      <Typography fontSize={"9px"} sx={{ cursor: "pointer" }}>{item?.address}</Typography>
                    </Stack>
                  </Stack>
                  <Image src={RigthArrowIcon} alt='icon' />
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