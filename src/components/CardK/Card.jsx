import { Box, Link, Stack, Typography } from "@mui/material";
import styles from "./card.module.css";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Shoe1 as placeholderImage } from "@/assets/svg/index"; // Ensure this import is correct

const Card = ({ data }) => {
  const [Pid, setProdId] = useState("");
  const [CatData, setData] = useState("");

  const productData = data?.Product?.Product;
  const sellerProductId = data?.SellerVariant?.SellerVariant?.SellerProductId;

  useEffect(() => {
    if (productData) {
      setData(productData);
      setProdId(sellerProductId);
    }
  }, [data, productData, sellerProductId]);

  const discount = useMemo(() => {
    if (CatData?.MRP > 0 && CatData?.salePrice >= 0) {
      return Math.ceil(
        ((CatData?.MRP - CatData?.salePrice) / CatData?.MRP) * 100
      );
    }
    return 0;
  }, [CatData?.MRP, CatData?.salePrice]);

  function capitalizeEachWord(sentence) {
    if (typeof sentence !== "string") {
      return "";
    }
    return sentence.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  const primaryImage =
    CatData?.primaryImage ||
    (CatData?.images?.length > 0 ? CatData?.images[0] : null);

  return (
    <Box className={styles.container}>
      <Link
        href={`/product/${Pid}`}
        sx={{ textDecoration: "none", color: "black" }}
      >
        {discount > 0 && (
          <Typography className={styles.discount}>{discount}%</Typography>
        )}
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={"product"}
            className={styles.image}
            width={400}
            height={600}
          />
        ) : (
          <Typography>No Image Available</Typography>
        )}
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            marginTop: "20px",
            padding: "0 10px",
          }}
        >
          <Stack direction={"column"}>
            <Typography className={styles.title}>
              {capitalizeEachWord(CatData?.name || "")}
            </Typography>
            <Typography className={styles.title}>
              {capitalizeEachWord(CatData?.articalName || "")}
            </Typography>
            <Typography className={styles.subtitle}>
              Style: {CatData?.sku || ""}
            </Typography>
          </Stack>
          <Stack direction={"column"} sx={{ alignItems: "center" }} gap={0}>
            <Typography className={styles.sp}>
              ₹{CatData?.salePrice || ""}
            </Typography>
            <Box>
              <Typography className={styles.mrp}>
                ₹{CatData?.MRP || ""}
              </Typography>
              <Typography className={styles.cutline}></Typography>
            </Box>
          </Stack>
        </Stack>
      </Link>
    </Box>
  );
};

export default Card;
