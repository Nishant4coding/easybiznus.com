import { Stack, Typography, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import styles from './cart.module.css';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';

const overlayStyle = {
    backdropFilter: "blur(9px)",
    backgroundColor: "rgba(13, 26, 38, 0.41)",
};


const Delete = ({open, handleClose})=>{
    
    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
            "& .MuiBackdrop-root": overlayStyle,
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}
      >
        <Stack sx={{
            backgroundColor:"#fff",
            padding:"30px 60px",
            width:"max-content",
            outline:"none",
            borderRadius:"5px",
            position:'relative'
        }} gap={2}>
            <IonIcon icon={closeOutline} style={{
                position:'absolute',
                right:'5px',
                top:'5px',
                cursor:'pointer'
            }} onClick={handleClose}></IonIcon>
            <Typography sx={{letterSpacing:"1px"}}>Are you sure you want to remove this item ?</Typography>
            <Stack direction={"row"} sx={{justifyContent:"space-around"}}>
                <Button variant="outlined" className={styles.modalyes}>Yes</Button>
                <Button variant="contained" className={styles.modalno} onClick={handleClose}>No</Button>
            </Stack>
        </Stack>
      </Modal>
    )
}

export default Delete;
