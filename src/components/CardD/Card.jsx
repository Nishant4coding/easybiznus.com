"use client";

import { addToCart } from "@/Redux/Features/cart/cartSlice";
import { capitalizeEachWord } from "@/Utility/util";
import { Delete, Pen } from "@/assets/svg/index";
import DeleteModal from "@/components/Wishlist/Delete";
import { IonIcon } from "@ionic/react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { checkmarkCircleOutline } from "ionicons/icons";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./card.module.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Card = ({ data, edit = true }) => {
  const router = useRouter();
  const cardData = data?.SellerProduct?.Product;
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleQtyChange = (e) => {
    const newQty = e.target.value;

    if (newQty === "") {
      setQty("");
    } else {
      setQty(Math.max(1, Number(newQty)));
    }
  };

  const handleQtyBlur = () => {
    if (qty === "" || Number(qty) < 1) {
      setQty(1);
    }
  };
  const handleAddToCart = () => {
    const productDetails = {
      productId: String(
        data?.SellerProduct?.Cartons[0]?.id ||
          data?.SellerProduct?.SellerVariants[0]?.id
      ),
      quantity: parseInt(qty),
      price: String(data?.SellerProduct?.price),
      salePrice: String(data?.SellerProduct?.Product?.salePrice),
      sellerId: String(data?.SellerProduct?.Product?.adminId),
      AccountId: String(data?.accountId),
    };

    if (qty && qty < 1) {
      toast.error("Quantity cannot be less than 1");
    }
    dispatch(addToCart(productDetails)).then((res) => {
      if (res.type === "cart/addToCart/fulfilled") {
        toast.success("Added to cart");
        router.push("/cart");
      } else if (res.type === "cart/addToCart/rejected") {
        toast.error("Failed to add to cart");
      }
    });
  };

  return (
    <Stack direction={"row"} gap={2} className={styles.container}>
      <Stack direction={"column"}>
        <Image
          src={cardData?.images[0] || cardData?.primaryImage}
          alt={"product"}
          width={200}
          height={200}
        />
        {/* <Typography className={styles.stock}>
          <IonIcon icon={checkmarkCircleOutline}></IonIcon>
          In-Stock
        </Typography> */}
      </Stack>
      <Stack direction={"column"} gap={1}>
        <Stack direction={"column"}>
          <Typography className={styles.prodname}>
            {cardData?.articalName}
          </Typography>
          <Typography className={styles.subtitle}>
            Color: {capitalizeEachWord(cardData?.Variants[0]?.color)}
          </Typography>
          <Typography className={styles.subtitle}>
            Size: {cardData?.Variants[0]?.size}
          </Typography>
          <Typography className={styles.subtitle}>
            SKU CODE: {cardData?.sku}
          </Typography>
        </Stack>
        <Box sx={{ width: "70px" }}>
          <FormControl fullWidth sx={dropdown}>
            <TextField
              type="number"
              inputProps={{
                min: 1,
              }}
              value={qty}
              onChange={handleQtyChange}
              onBlur={handleQtyBlur}
            />
          </FormControl>
        </Box>
      </Stack>
      <Stack direction={"column"} sx={{ width: "30%", alignItems: "flex-end" }}>
        <Stack direction={"column"} gap={1}>
          <Typography className={styles.price}>
            ₹ {cardData?.salePrice * qty}
          </Typography>
          <Stack direction={"row"} gap={2} sx={{ justifyContent: "flex-end" }}>
            {edit && (
              <Image src={Pen} alt={"pen"} style={{ cursor: "pointer" }} />
            )}
            <Image
              src={Delete}
              alt={"delete"}
              style={{ cursor: "pointer" }}
              onClick={handleOpen}
            />
          </Stack>
        </Stack>

        {/* {edit && conditional on location*/}
        <Button
          variant="contained"
          className={styles.button}
          sx={{
            "&:hover": {
              backgroundColor: "#0D1A26",
            },
            marginTop: "40px",
          }}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </Button>
        {/* } */}
      </Stack>
      <DeleteModal
        open={open}
        handleClose={handleClose}
        wishId={data?.sellerProductId}
      />
    </Stack>
  );
};

export default Card;

const dropdown = {
  "& label.Mui-focused": {
    color: "#0D1A26",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#0D1A26",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "0px",
    color: "#000",
    height: "42px",
    fontSize: "13px",
    "& fieldset": {
      border: "1px solid #0D1A26",
    },
    "&:hover fieldset": {
      border: "1px solid #0D1A26",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #0D1A26",
    },
  },
};
