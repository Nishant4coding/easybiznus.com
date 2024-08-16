import { Box } from "@mui/material";
import Card from "@/components/CardJ/Card";
import styles from "./home.module.css";

const Products = ({ prodData }) => {
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
