import { Box, Stack, Typography } from "@mui/material";
import styles from "./card.module.css";
import { Shoe1 as image } from "@/assets/svg/index";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const Card = ({ data }) => {
  const [Pid, setProdId] = useState("");
  const [CatData, setData] = useState("");

  useEffect(() => {
    if (data) {
      const productData = data.Product;
      const sellerProductId = data.SellerVariants && data.SellerVariants.length > 0 ? data.SellerVariants[0].SellerProductId : "";
      setData(productData);
      setProdId(sellerProductId);
    }
  }, [data]);

  // const { MRP, salePrice, sku, name, link } = data;

  // const discount = useMemo(() => {
  //     return Math.ceil(((MRP - salePrice) / MRP) * 100);
  // }, [MRP, salePrice])

  // function capitalizeEachWord(sentence) {
  //     return sentence.replace(/\b\w/g, function (char) {
  //         return char.toUpperCase();
  //     });
  // }

  return (
    <Box className={styles.container}>
      <Link href={`/product/${Pid}`}>
        {/* <Typography className={styles.discount}>{discount}%</Typography> */}
        <Image src={CatData.primaryImage} alt={"product"} className={styles.image} width={400} height={600} />
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            marginTop: "20px",
            padding: "0 10px",
          }}
        >
          <Stack direction={"column"}>
            {/* <Typography className={styles.title}>{capitalizeEachWord(name)}</Typography> */}
            <Typography className={styles.title}>
              {CatData.articalName}
            </Typography>
            {/* <Typography className={styles.subtitle}>Style: {sku.toUpperCase()}</Typography> */}
            {/* <Typography className={styles.subtitle}>Style: {sku}</Typography> */}
          </Stack>
          <Stack direction={"column"} sx={{ alignItems: "center" }} gap={0}>
            {/* <Typography className={styles.sp}>₹{salePrice}</Typography> */}
            <Box>
              {/* <Typography className={styles.mrp}>₹{MRP}</Typography> */}
              <Typography className={styles.cutline}></Typography>
            </Box>
          </Stack>
        </Stack>
      </Link>
    </Box>
  );
};

export default Card;
