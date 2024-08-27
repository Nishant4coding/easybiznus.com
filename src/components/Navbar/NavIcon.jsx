"use client";

import { Box, Badge } from "@mui/material";
import Image from "next/image";
import { Avatar, Cart, Heart } from "@/assets/svg/index";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "@/Redux/Features/cart/cartSlice";
import { useEffect, useState } from "react";
import { fetchWishlist } from "@/Redux/Features/wishlist/wishlistSlice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F55E53",
    },
  },
});

const NavIcon = ({ handleOpen, userMenu }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart.items);
  const wishItems = useSelector((state) => state.wishlist.items);
  const [iconsArray, setIconsArray] = useState(iconArray);

  useEffect(() => {
    const cartLength = cartItems?.length || 0;
    const wishLength = wishItems?.length || 0;
    setIconsArray([]);
    setIconsArray([
      {
        title: "Heart",
        asset: Heart,
        path: "/wishlist",
        number: wishLength,
      },
      {
        title: "Cart",
        asset: Cart,
        path: "/cart",
        number: cartLength,
      },
      {
        title: "Avatar",
        asset: Avatar,
        number: 0,
      },
    ]);
  }, [cartItems, wishItems]);
  const isLoggedIn = useSelector((state) => state.profile.profile);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchWishlist());
      dispatch(getCart());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {iconsArray.length &&
        iconsArray.map((icon, index) => (
          <Box
            sx={{
              height: "100%",
              width: "fit-content",
              cursor: "pointer",
              padding: "0 10px",
              visibility:
                icon.title === "Avatar"
                  ? "visible"
                  : !isLoggedIn
                  ? "hidden"
                  : "visible",
            }}
            key={index}
            onClick={() => {
              icon.path ? router.push(icon.path) : null;
              if (index === 2 && userMenu === false) {
                handleOpen();
              }
            }}
          >
            {icon.number !== undefined ? (
              <ThemeProvider theme={theme}>
                <Badge
                  badgeContent={icon.number}
                  color="primary"
                  sx={{
                    "& .MuiBadge-badge": {
                      minWidth: "auto",
                      height: "auto",
                      padding: "2px 3px 0 3px",
                      fontSize: "9px",
                    },
                  }}
                >
                  <Image src={icon.asset} alt={"cart"} width={15}></Image>
                </Badge>
              </ThemeProvider>
            ) : (
              <Image src={icon.asset} alt={"cart"} width={15}></Image>
            )}
          </Box>
        ))}
    </Box>
  );
};

export default NavIcon;
const iconArray = [
  {
    title: "Heart",
    asset: Heart,
    path: "/wishlist",
    number: 0,
  },
  {
    title: "Cart",
    asset: Cart,
    path: "/cart",
    number: 0,
  },
  {
    title: "Avatar",
    asset: Avatar,
    number: 0,
  },
];
