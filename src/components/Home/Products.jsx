import { Box, Typography } from "@mui/material";
import Card from "@/components/CardJ/Card";
import styles from "./home.module.css";

const Products = ({ prodData }) => {
  if (prodData?.length == 0) return <Typography>No Data Available</Typography>;
  return (
    <Box direction={"row"} className={styles.products} gap={10}>
      {prodData &&
        prodData.map((item, index) => (
          <Box sx={{ flexShrink: 0 }} key={index}>
            <Card data={item} />
          </Box>
        ))}
    </Box>
  );
};

export default Products;
