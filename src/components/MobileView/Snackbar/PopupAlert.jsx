import { Stack, Typography, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import styles from './snabar.module.css';
import { CartOutline, DetailOutline, GreenTick } from '@/assets/svg';
import Image from 'next/image';
import Link from 'next/link';
import { IonIcon } from '@ionic/react';
import { checkmarkCircle, close } from 'ionicons/icons';

const overlayStyle = {
  backdropFilter: "blur(9px)",
  backgroundColor: "rgba(13, 26, 38, 0.41)",
};


const Popup = ({ open, handleClose, title, type, path }) => {

  useEffect(() => {
    const counter = setTimeout(() => handleClose(), 2500);

    return ()=>{
      clearTimeout(counter);
    }
  }, [handleClose])

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        "& .MuiBackdrop-root": overlayStyle,
        display: "flex",
        alignItems: "flex-start"
      }}
    >
      <Stack className={styles.popup}>
        <IonIcon icon={close} style={{ color: '#fff', position: 'absolute', right: '10px', top: '5px' }} onClick={handleClose} />
        <Stack direction={"row"} sx={{ justifyContent: 'space-between', alignItems: "center", padding: '10px' }}>
          <Stack direction={"row"} gap={1} sx={{ alignItems: "center" }}>
            {type === "success" ?
              <IonIcon icon={checkmarkCircle} style={{ color: "#55B938", fontSize: '23px' }} /> :
              <IonIcon icon={checkmarkCircle} style={{ color: "#FE9496", fontSize: '23px' }} />
            }
            <Typography sx={{ color: '#fff' }}>{title}</Typography>
          </Stack>
          <Link href={`${path}`} style={{ marginRight: '25px' }}>
          {type === "success" ?
              <Image alt="cart" src={CartOutline} />:
              <Image alt="cart" src={DetailOutline} />
          }
          </Link>
        </Stack>
        <Stack className={styles.progress} style={type === "success" ? { backgroundColor: '#55B938' } : { backgroundColor: '#FE9496' }}></Stack>
      </Stack>
    </Modal>
  )
}

export default Popup;