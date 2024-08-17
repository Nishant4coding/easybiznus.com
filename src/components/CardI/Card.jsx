"use client";

import { Delete } from "@/assets/svg/index";
import DeleteModal from "@/components/Cart/Delete";
import { editCartItemQuantity } from "@/Redux/Features/cart/cartSlice";
import { capitalizeWords } from "@/Utility/util";
import { IonIcon } from "@ionic/react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { checkmarkCircleOutline } from "ionicons/icons";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./card.module.css";

const Card = ({ data, edit = true }) => {
  const cardData =
    data.Carton?.SellerProduct || data?.SellerVariant?.SellerProduct;
  const [qty, setQty] = useState(data.quantity || 1);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleQtyChange = (e) => {
    const newQty = e.target.value;
    if (newQty > 0) {
      setQty(newQty);
      dispatch(
        editCartItemQuantity({ cartItemId: data?.id, quantity: newQty })
      );
    }
  };

  return (
    <Stack direction={"row"} gap={2} className={styles.container}>
      <Stack direction={"column"}>
        <Image
          src={cardData?.Product?.images[0] || cardData?.Product?.primaryImage}
          alt={"product"}
          width={200}
          height={200}
        />
        <Typography className={styles.stock}>
          {data?.SellerVariant?.stock > 0 ? (
            <>
              <IonIcon icon={checkmarkCircleOutline}></IonIcon> In-Stock
            </>
          ) : (
            <>
              <IonIcon icon={checkmarkCircleOutline}></IonIcon> Out of Stock
            </>
          )}
        </Typography>
      </Stack>
      <Stack direction={"column"} gap={1}>
        <Stack direction={"column"}>
          <Typography className={styles.prodname}>
            {capitalizeWords(cardData?.Product?.name)}
          </Typography>{" "}
          <Typography className={styles.subtitle}>
            Color: {capitalizeWords(data?.SellerVariant?.color)}
          </Typography>
          <Typography className={styles.subtitle}>
            Size: {data?.SellerVariant?.size}
          </Typography>
          <Typography className={styles.subtitle}>
            SKU CODE: {cardData?.Product?.sku}
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
            ></TextField>
          </FormControl>
        </Box>
      </Stack>
      <Stack direction={"column"} sx={{ width: "30%", alignItems: "flex-end" }}>
        <Stack direction={"column"} gap={1}>
          <Typography className={styles.price}>
            ₹ {Math.floor(data?.salePrice)}
          </Typography>
          <Stack direction={"row"} gap={2} sx={{ justifyContent: "flex-end" }}>
            {/* {edit && (
              <Image src={Pen} alt={"pen"} style={{ cursor: "pointer" }} />
            )} */}
            <Image
              src={Delete}
              alt={"delete"}
              style={{ cursor: "pointer" }}
              onClick={handleOpen}
            />
          </Stack>
        </Stack>

        {/* {edit && (
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
        )} */}
      </Stack>
      <DeleteModal
        open={open}
        handleClose={handleClose}
        cartItemId={data?.id}
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
