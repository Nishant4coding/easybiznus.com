import { Stack, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import styles from './nav.module.css';
import { User, UserLogo, UserWallet, CartBlack, Chat, Bag } from "@/assets/svg/index";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProfile } from "@/Redux/Features/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const overlayStyle = {
    backgroundColor: "rgba(13, 26, 38, 0.3)",
};

const UserMenu = ({ userMenu, handleClose }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const profileState = useSelector(state => state.profile);

    useEffect(() => {
        if (profileState.profile === null) {
            dispatch(getProfile());
        }
    }, [dispatch, profileState.profile])

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
                {profileState ?
                    <>
                        <Typography className={styles.username} onClick={() => {
                            handleClose();
                        }}>
                            <Image src={User} alt={"icon"} width={30} />
                            Hello, {profileState?.firstName}
                        </Typography>

                        {
                            menuArray.map((item, index) => (
                                <Link onClick={handleClose} href={item.path} key={index} className={styles.menuitem}>
                                    <Image src={item.icon} alt="icon" />
                                    {item.title}
                                </Link>
                            ))
                        }
                    </>
                    :
                    <>
                        {
                            menuArray2.map((item, index) => (
                                <Link onClick={handleClose} href={item.path} key={index} className={styles.menuitem}>
                                    <Image src={item.icon} alt="icon" />
                                    {item.title}
                                </Link>
                            ))
                        }
                    </>

                }
                {profileState && <Typography className={styles.linebreak}></Typography>}
                {profileState && <Link href="#" style={{ display: 'flex', justifyContent: "center" }} className={styles.menuitem} onClick={handleClose}>LOGOUT</Link>}
            </Stack>
        </Modal>
    )
}

export default UserMenu;

const menuArray = [
    {
        title: "My Account", path: "/account",
        icon: UserLogo
    },
    {
        title: "My Orders", path: "/orders",
        icon: Bag
    },
    {
        title: "Wallet", path: "/wallet",
        icon: UserWallet
    },
    {
        title: "Try & Buy", path: "/trynbuy",
        icon: CartBlack
    },
    {
        title: "Contact Us", path: "#",
        icon: Chat
    },
]

const menuArray2 = [
    {
        title: "LOGIN", path: "#",
        icon: UserLogo
    }
]