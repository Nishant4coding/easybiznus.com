import { Stack, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import styles from './nav.module.css';
import { User, UserLogo, UserWallet, CartBlack, Chat, Bag } from "@/assets/svg/index";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const overlayStyle = {
    // backdropFilter: "blur(9px)",
    backgroundColor: "rgba(13, 26, 38, 0.3)",
};

const UserMenu = ({ userMenu, handleClose }) => {
    const router = useRouter();

    return (
        <Modal
            open={userMenu}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                "& .MuiBackdrop-root": overlayStyle,
                display: "flex",
                alignItems: "flex-start",
            }}
        >
            <Stack className={styles.menu}>
                <Typography className={styles.username} onClick={() => {
                    handleClose();
                }}>
                    <Image src={User} alt={"icon"} width={30} />
                    Hello, {"<Name>"}
                </Typography>
                {
                    menuArray.map((item, index) => (
                        <Link onClick={handleClose} href={item.path} key={index} className={styles.menuitem}>
                            <Image src={item.icon} alt="icon"/>
                            {item.title}
                        </Link>
                    ))
                }
                <Typography className={styles.linebreak}></Typography>
                <Link href="#" style={{display:'flex', justifyContent:"center"}} className={styles.menuitem} onClick={handleClose}>LOGOUT</Link>
            </Stack>
        </Modal>
    )
}

export default UserMenu;

const menuArray = [
    {
        title: "My Account", path: "/account",
        icon:UserLogo },
    {
        title: "My Orders", path: "/orders",
        icon:Bag },
    {
        title: "Wallet", path: "/wallet",
        icon:UserWallet },
    {
        title: "Try & Buy", path: "/trynbuy",
        icon:CartBlack },
    {
        title: "Contact Us", path: "#",
        icon:Chat },
]