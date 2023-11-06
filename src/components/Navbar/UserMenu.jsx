import { Stack, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import styles from './nav.module.css';
import { User } from "@/assets/svg/index";
import Image from "next/image";
import Link from "next/link";

const overlayStyle = {
    backdropFilter: "blur(9px)",
    backgroundColor: "rgba(13, 26, 38, 0.41)",
};

const UserMenu = ({ userMenu, handleClose }) => {
    return (
        <Modal
            open={userMenu}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                // "& .MuiBackdrop-root": overlayStyle,
                display: "flex",
                alignItems: "flex-start",
            }}
        >
            <Stack className={styles.menu}>
                <Typography className={styles.username} onClick={handleClose}>
                    <Image src={User} alt={"icon"} width={30} />
                    Hello, {"<Name>"}
                </Typography>
                {
                    menuArray.map((item, index) => (
                        <Link onClick={handleClose} href={item.path} key={index} className={styles.menuitem}>{item.title}</Link>
                    ))
                }
                <Typography className={styles.linebreak}></Typography>
                <Link href="#" className={styles.menuitem} onClick={handleClose}>LOGOUT</Link>
            </Stack>
        </Modal>
    )
}

export default UserMenu;

const menuArray = [
    {title:"My Account", path:"#"},
    {title:"My Orders",path:"/orders"},
    {title:"Wallet",path:"/wallet"},
    {title:"Try & Buy",path:"/trynbuy"},
    {title:"Contact Us",path:"#"},
]