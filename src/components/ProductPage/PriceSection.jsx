import { capitalizeEachWord } from "@/Utility/util";
import { Box, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import Description from "./Description";
import styles from "./product.module.css";
import Quantity from "./Quantity";
import Service from "./Service";
import Shipping from "./Shipping";
import Size from "./Size";

const PriceSection = ({ handleOpen, setPopTitle, data }) => {
  const details = data.Product;

  const discount = useMemo(() => {
    if (details?.MRP > 0 && details?.salePrice >= 0) {
      return Math.ceil(
        ((details?.MRP - details?.salePrice) / details?.MRP) * 100
      );
    }
    return 0;
  }, [details?.MRP, details?.salePrice]);

  const sizeArray = useMemo(() => {
    if (data?.SellerVariants) {
      const uniqueSizes = new Set();
      return data?.SellerVariants.reduce((acc, variant) => {
        if (!uniqueSizes.has(variant?.size)) {
          uniqueSizes.add(variant?.size);
          acc.push({
            size: variant?.size,
            available: true,
          });
        }
        return acc;
      }, []);
    }
    return [];
  }, [data?.SellerVariants]);

  const colorArray = useMemo(() => {
    if (data?.SellerVariants) {
      const uniqueColors = new Set();
      return data?.SellerVariants.reduce((acc, variant) => {
        if (!uniqueColors.has(variant?.color)) {
          uniqueColors.add(variant?.color);
          acc.push({
            color: variant?.color,
          });
        }
        return acc;
      }, []);
    }
    return [];
  }, [data?.SellerVariants]);

  const [selectedSize, setSelectedSize] = useState(sizeArray[0]?.size);
  const [selectedColor, setSelectedColor] = useState(colorArray[0]?.color);

  return (
    <Stack className={styles.pricesection}>
      <Stack direction={"row"} gap={5} sx={{ alignItems: "center" }}>
        <Stack direction={"column"} sx={{ marginBottom: "10px" }}>
          <Typography className={styles.priceheading}>
            {details?.name ? capitalizeEachWord(details?.articalName) : ""}
          </Typography>
          <Typography className={styles.pricesubhead}>
            Product Category :{capitalizeEachWord(details?.section)}
          </Typography>
          <Stack direction={"row"} gap={1}>
            <Typography style={{ fontSize: "14px" }}>MRP:</Typography>
            <Stack direction={"column"} sx={{ alignItems: "center" }} gap={0}>
              <Typography className={styles.sp}>
                ₹{details.salePrice ? details?.salePrice : ""}
              </Typography>
              <Box>
                <Typography className={styles.mrp}>
                  ₹{details?.MRP ? details?.MRP : ""}
                </Typography>
                <Typography className={styles.cutline}></Typography>
              </Box>
            </Stack>
          </Stack>
          <Typography className={styles.declaration}>
            Inclusive of Taxes
          </Typography>
          <Typography className={styles.declaration}>
            (Also include all application duties)
          </Typography>
        </Stack>
        {discount > 0 && (
          <Typography
            sx={{ fontWeight: "600", fontSize: "18px", letterSpacing: "0px" }}
          >
            {discount}% OFF
          </Typography>
        )}
      </Stack>
      <Typography className={styles.linebreak}></Typography>
      <Stack
        direction={"column"}
        sx={{ padding: "10px 0px 10px 25px", width: "100%" }}
      >
        <Size
          sizeArray={sizeArray}
          colorArray={colorArray}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Quantity
          handleOpen={handleOpen}
          setPopTitle={setPopTitle}
          data={data}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* <Pincode /> //NO api for pincode */}
      </Stack>
      <Typography className={styles.linebreak}></Typography>
      <Stack direction={"column"} sx={{ padding: "10px 0px 10px 25px" }}>
        <Service />
      </Stack>
      <Typography className={styles.linebreak}></Typography>
      <Stack direction={"column"} sx={{ padding: "10px 0px 10px 25px" }}>
        <Description details={details} />
      </Stack>
      {/* <Typography className={styles.linebreak}></Typography> */}
      <Stack direction={"column"} sx={{ padding: "10px 0px 10px 25px" }}>
        <Shipping />
      </Stack>
    </Stack>
  );
};

export default PriceSection;
