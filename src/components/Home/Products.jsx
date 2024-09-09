import { Box, Typography } from "@mui/material";
import Card from "@/components/CardJ/Card";
import styles from "./home.module.css";

const Products = ({ prodData }) => {
  return (
    <Box direction={"row"} className={styles.products} gap={10}>
      {prodData &&
      prodData[0] &&
      prodData[0].sellerProducts &&
      prodData[0].sellerProducts.length > 0 ? (
        prodData?.map((item) =>
          item.sellerProducts.map((itemData, index) => {
            return (
              <Box sx={{ flexShrink: 0 }} key={index}>
                <Card data={itemData} />
              </Box>
            );
          })
        )
      ) : (
        <Typography sx={{ textAlign: "center", width: "100%" }}>
          No Data Available
        </Typography>
      )}
    </Box>
  );
};

export default Products;
