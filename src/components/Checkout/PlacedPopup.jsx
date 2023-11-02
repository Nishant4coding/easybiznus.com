import { Stack, Typography, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import Image from 'next/image';
import { Logo, OrderPlaced } from '@/assets/svg';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const overlayStyle = {
    backdropFilter: "blur(9px)",
    backgroundColor: "rgba(13, 26, 38, 0.41)",
};


const PlacedPopup = ({ open, handleClose }) => {
    const router = useRouter();

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                router.push('/')
            }, 3000)
        }
    }, [open])

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                "& .MuiBackdrop-root": overlayStyle,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Stack sx={{
                backgroundColor: "#0D1A26",
                padding: "30px 180px",
                width: "max-content",
                outline: "none",
                borderRadius: "5px",
                position: 'relative',
                alignItems: 'center',
            }} gap={5}>
                <IonIcon icon={closeOutline} style={{
                    position: 'absolute',
                    right: '5px',
                    top: '5px',
                    cursor: 'pointer',
                    color: '#fff'
                }} onClick={handleClose}></IonIcon>
                <Image src={Logo} />
                <Image src={OrderPlaced} width={200} />
            </Stack>
        </Modal>
    )
}

export default PlacedPopup;
