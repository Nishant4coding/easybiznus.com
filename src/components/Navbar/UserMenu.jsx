import { Bag, Chat, User, UserLogo } from "@/assets/svg/index";
import { getProfile, logout } from "@/Redux/Features/profile/profileSlice";
import { Box, Stack, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./nav.module.css";

const overlayStyle = {
  backgroundColor: "rgba(13, 26, 38, 0.3)",
};

const UserMenu = ({ userMenu, handleClose }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.profile.profile);

  useEffect(() => {
    if (userData === null) {
      dispatch(getProfile());
    }
  }, [dispatch, userData]);

  const loggingout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(logout());
    router.push("/login");
  };

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
        {userData ? (
          <>
            <Typography
              className={styles.username}
              onClick={() => {
                handleClose();
              }}
            >
              <Image src={User} alt={"icon"} width={30} />
              Hello, {userData?.firstName}
            </Typography>

            {menuArray.map((item, index) => (
              <Link
                onClick={handleClose}
                href={item.path}
                key={index}
                className={styles.menuitem}
              >
                <Image src={item.icon} alt="icon" />
                {item.title}
              </Link>
            ))}
          </>
        ) : (
          <>
            {menuArray2.map((item, index) => (
              <Link
                onClick={handleClose}
                href={item.path}
                key={index}
                className={styles.menuitem}
              >
                <Image src={item.icon} alt="icon" />
                {item.title}
              </Link>
            ))}
          </>
        )}
        {userData && <Typography className={styles.linebreak}></Typography>}
        {userData && (
          <Box
            style={{ display: "flex", justifyContent: "center" }}
            className={styles.menuitem}
            onClick={() => {
              loggingout();
              handleClose();
            }}
          >
            LOGOUT
          </Box>
        )}
      </Stack>
    </Modal>
  );
};

export default UserMenu;

const menuArray = [
  {
    title: "My Account",
    path: "/account",
    icon: UserLogo,
  },
  {
    title: "My Orders",
    path: "/orders",
    icon: Bag,
  },
  // {
  //     title: "Wallet",
  //     path: "/wallet",
  //     icon: UserWallet,
  // },
  // {
  //     title: "Try & Buy",
  //     path: "/trynbuy",
  //     icon: CartBlack,
  // },
  {
    title: "Contact Us",
    path: "#",
    icon: Chat,
  },
];

const menuArray2 = [
  {
    title: "LOGIN",
    path: "/login",
    icon: UserLogo,
  },
];
