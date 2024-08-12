import { Box, Typography, Stack } from "@mui/material";
import Card from "@/components/CardK/Card";

const Products = ({ products }) => {
  return (
    <Box sx={{ padding: "50px", justifyContent: "center", alignItems: "center" }}>
      <Stack direction="row" flexWrap="wrap" gap="30px">
        {products && products.map((item, index) => (
          <Box sx={{ flexShrink: 0 }} key={index}>
            <Card data={item} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Products;
