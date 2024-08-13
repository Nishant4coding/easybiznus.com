"use client";
import { Box, Stack, TextField } from "@mui/material";
import {
  closeCircleOutline,
  heart,
  heartOutline,
  addOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { useRef, useState, useEffect } from "react";
import styles from "./product.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/Redux/Features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
  fetchWishlist,
} from "@/Redux/Features/wishlist/wishlistSlice";

const Quantity = ({
  handleOpen,
  setPopTitle,
  data,
  selectedSize,
  selectedColor,
}) => {
  const qtyRef = useRef(null);
  const [qty, setQty] = useState("");
  const [wish, setWish] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    dispatch(fetchWishlist()).then((action) => {
      const productId = String(data.SellerVariants[0].SellerProductId);
      console.log("Fetched Wishlist:", action.payload);
      console.log("Checking for productId:", productId);
      const isInWishlist = action.payload.some(
        (item) => String(item.sellerProductId) === productId
      );
      console.log("Is in wishlist:", isInWishlist);
      setWish(isInWishlist);
    });
  }, [dispatch, data]);

  const handleAddToCart = () => {
    const variant = data.SellerVariants.find(
      (variant) =>
        variant.size === selectedSize && variant.color === selectedColor
    );

    if (!variant) {
      toast.error("Selected variant is not available", {
        duration: 2000,
        position: "top-center",
      });
      return;
    }

    const productDetails = {
      productId: String(variant?.id),
      quantity: qty,
      price: String(data?.Product?.MRP),
      salePrice: String(data?.Product?.salePrice),
      sellerId: String(data?.Product?.adminId),
      AccountId: String(data?.AccountId),
    };
    console.log("productDetails", productDetails);
    dispatch(addToCart(productDetails));
  };

  const handleWishlistToggle = () => {
    const productId = data.SellerVariants[0].SellerProductId;
    if (wish) {
      dispatch(removeFromWishlist({ productId }));
      setWish(false);
    } else {
      dispatch(addToWishlist({ productId }));
      setWish(true);
    }
  };

  return (
    <Stack
      direction={"row"}
      gap={2}
      sx={{
        marginTop: "35px",
        height: "120px",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Toaster />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
          height: "100%",
        }}
      >
        <Stack direction="row" sx={{ position: "relative" }}>
          <TextField
            ref={qtyRef}
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            className={styles.qtyinput}
            sx={input}
            value={qty}
            onChange={(e) => {
              if (e.target.value === "" || !isNaN(parseInt(e.target.value)))
                setQty(e.target.value);
            }}
          ></TextField>
          <IonIcon
            icon={closeCircleOutline}
            size={"medium"}
            style={{
              position: "absolute",
              top: "32%",
              right: "10px",
              cursor: "pointer",
            }}
          ></IonIcon>
        </Stack>
        <IonIcon
          icon={wish ? heart : heartOutline}
          size="large"
          style={{ color: wish ? "#F55E53" : "inherit", cursor: "pointer" }}
          onClick={() => {
            handleWishlistToggle();
            if (!wish) {
              toast.success("Product added to Wishlist", {
                duration: 2000,
                position: "top-center",
              });
            } else {
              toast.success("Product removed from Wishlist", {
                duration: 2000,
                position: "top-center",
              });
            }
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "100%",
        }}
      >
        <Box
          className={styles.button}
          onClick={() => {
            if (parseInt(qty) > 0) {
              setPopTitle({
                title: "Added to Cart",
                button2: "View Bag",
                button: "Checkout",
                path2: "/cart",
                path: "/checkout",
                name: data.Product.name,
                price: data.Product.salePrice,
                image: data.Product.primaryImage,
                size: selectedSize,
              });
              handleOpen();
              handleAddToCart(data);
            } else {
              toast.error("Enter Quantity", {
                duration: 2000,
                position: "top-center",
              });
              qtyRef.current.children[1].click();
            }
          }}
        >
          <IonIcon icon={addOutline}></IonIcon>
          ADD TO CART
        </Box>
        {/* <Box
          className={styles.button}
          onClick={() => {
            setPopTitle({
              title: "Added to Try On",
              button: "Go to Try On",
              path: "/trynbuy",
            });
            handleOpen();
          }}
        >
          <IonIcon icon={addOutline}></IonIcon>
          ADD TO TRY ON
        </Box> */}
      </Box>
    </Stack>
  );
};

export default Quantity;

const input = {
  "& label.Mui-focused": {
    color: "#0D1A26",
    fontWeight: "700",
    marginTop: "0px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    height: "45px",
    "& fieldset": {
      border: "1px solid #0D1A26",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#0D1A26",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #0D1A26",
      borderRadius: "10px",
    },
  },
  "& label": {
    marginTop: "-4px",
    color: "#0D1A26",
    fontSize: "13px",
  },
};
