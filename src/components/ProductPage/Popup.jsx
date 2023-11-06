import { Stack, Typography, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import Navbar from '../Navbar/Navbar';
import { ModalShoe } from '@/assets/svg/index';
import Image from 'next/image';
import styles from './product.module.css'
import Link from 'next/link';
import { useEffect } from 'react';

const overlayStyle = {
    backdropFilter: "blur(9px)",
    backgroundColor: "rgba(13, 26, 38, 0.41)",
};


const Popup = ({ open, handleClose, poptitle }) => {

    useEffect(() => {
        setTimeout(() => handleClose(),2000);
    }, [])

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
            <Stack sx={{ width: "100%", alignItems: "flex-end", outline: "none" }}>
                <Navbar />
                <Stack sx={{
                    backgroundColor: "#fff",
                    padding: "10px 30px",
                    width: "max-content",
                    outline: "none",
                    position: 'relative'
                }} gap={2}>
                    <IonIcon icon={closeOutline} size="medium" style={{
                        position: 'absolute',
                        right: '10px',
                        top: '13px',
                        cursor: 'pointer'
                    }} onClick={handleClose}></IonIcon>
                    <Typography className={styles.poptitle}>{poptitle.title}</Typography>
                    <Stack direction={"row"} gap={3}>
                        <Image src={ModalShoe} alt={"product"}/>
                        <Stack>
                            <Typography className={styles.poptitle} style={{ fontSize: "13px" }}>Nike Invisible 3</Typography>
                            <Typography className={styles.popsubtitle}>Mens Road Running Shoes</Typography>
                            <Typography className={styles.popsubtitle}>Size UK 8</Typography>
                            <Typography className={styles.poptitle} style={{ fontSize: "13px" }}>MRP: ₹16,110</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} sx={{ justifyContent: "center" }} gap={3}>
                        {
                            poptitle.path2 === "/cart" &&
                            <Link href={poptitle.path2}>
                                <Button variant="contained" className={styles.popbtn2}>
                                    {poptitle.button2}
                                </Button>
                            </Link>

                        }
                        <Link href={poptitle.path}>
                            <Button variant="contained" className={styles.popbtn}>
                                {poptitle.button}
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Modal>
    )
}

export default Popup;

