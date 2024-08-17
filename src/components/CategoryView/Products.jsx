"use client";
import Card from "@/components/CardK/Card";
import { Box, Stack, Typography } from "@mui/material";

const Products = ({ products }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        gap: "60px",
        padding: "50px",
        justifyContent: "left",
        alignItems: "center",
      }}
    >
      {products && products.length > 0 ? (
        <Stack direction="row" flexWrap="wrap" gap="30px">
          {products.map((item, index) => (
            <Box sx={{ flexShrink: 0 }} key={index}>
              <Card data={item} />
            </Box>
          ))}
        </Stack>
      ) : (
        <Typography variant="h6" align="center" width="100%">
          No products available
        </Typography>
      )}
    </Box>
  );
};
export default Products;
