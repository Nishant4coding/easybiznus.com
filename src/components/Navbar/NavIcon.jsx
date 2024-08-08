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
  const [cartData, setCartData] = useState(cartItems);
  const [wishData, setWishData] = useState(wishItems);

  useEffect(() => {
      dispatch(fetchWishlist());
    dispatch(getCart());
  }, [dispatch,dispatch]);

  useEffect(() => {
    setCartData(cartItems);
  }, [cartItems]);

  useEffect(()=>{
    setWishData(wishItems);
  },[wishItems])
  console.log(cartData);
  console.log(wishData.length);
  const cartLength = cartData.length;
  const wishLength = wishData.length;


  const iconArray = [
    {
      title: Heart,
      path: "/wishlist",
      number: wishLength,
    },
    {
      title: Cart,
      path: "/cart",
      number: cartLength,
    },
    {
      title: Avatar,
      number: 0,
    },
  ];
  


  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {iconArray.map((icon, index) => (
        <Box
          sx={{
            height: "100%",
            width: "fit-content",
            cursor: "pointer",
            padding: "0 10px",
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
                badgeContent={index === 1 ?  icon.number :0}
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
                <Image src={icon.title} alt={"cart"} width={15}></Image>
              </Badge>
            </ThemeProvider>
          ) : (
            <Image src={icon.title} alt={"cart"} width={15}></Image>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default NavIcon;

