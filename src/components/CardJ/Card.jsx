import { Box, Stack, Typography } from "@mui/material";
import styles from "./card.module.css";
import { Shoe1 as image } from "@/assets/svg/index";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const Card = ({ data }) => {
  console.log("props data",data)

  const [Pid, setProdId] = useState("");
  const [CatData, setData] = useState("");

  const productData = data?.sellerProducts[0].Product.Product;
    

  const sellerProductId = data.sellerProducts[0].id;
  console.log("pid",sellerProductId)
  console.log("productData",productData)
  useEffect(() => {
      
      setData(productData);
      setProdId(sellerProductId);
  }, [data]);
  // console.log("cat",CatData)
  // console.log("pid",Pid)


  const discount = useMemo(() => {
    if (CatData?.MRP > 0 && CatData?.salePrice >= 0) {
      return Math.ceil(((CatData.MRP - CatData.salePrice) / CatData.MRP) * 100);
    }
    return 0;
  }, [CatData.MRP, CatData.salePrice]);

  function capitalizeEachWord(sentence) {
    if (typeof sentence !== 'string') {
      return '';
    }
    return sentence.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  return (
    <Box className={styles.container}>
      <Link href={`/product/${Pid}`}>
        <Typography className={styles.discount}>{discount}%</Typography>
        <Image src={CatData.images[0]} alt={"product"} className={styles.image} width={400} height={600} />
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            marginTop: "20px",
            padding: "0 10px",
          }}
        >
          <Stack direction={"column"}>
            <Typography className={styles.title}>{capitalizeEachWord(name)}</Typography>
            <Typography className={styles.title}>
              {capitalizeEachWord(CatData.articalName)}
            </Typography>
            <Typography className={styles.subtitle}>Style: {CatData.sku}</Typography>
          </Stack>
          <Stack direction={"column"} sx={{ alignItems: "center" }} gap={0}>
            <Typography className={styles.sp}>₹{CatData.salePrice}</Typography>
            <Box>
              <Typography className={styles.mrp}>₹{CatData.MRP}</Typography>
              <Typography className={styles.cutline}></Typography>
            </Box>
          </Stack>
        </Stack>
      </Link>
    </Box>
  );
};

export default Card;

