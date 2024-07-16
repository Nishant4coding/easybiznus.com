"use client";
import { Box, Typography, Stack } from "@mui/material";
import Card from "@/components/CardA/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/Redux/Features/category/categorySlice";
import { getAllProducts } from "@/Redux/Features/product/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);
  const productState = useSelector((state) => state.product);
  const categories = categoryState.categories.categories;
  const products = productState.allProducts.sellerProducts;
  const [filteredProducts, setFilteredProducts] = useState({});
  const [categoryDict, setCategoryDict] = useState({});


  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if(categories){

        const categoryDict = categories?.reduce((acc, category) => {
            acc[category.id] = category.title;
            return acc;
        }, {});
        setCategoryDict(categoryDict)
    }
    if (categories && products) {
        // console.log("category", categories);
        // console.log("products", products);
        const filtered = categories.reduce((acc, category) => {
            acc[category.id] = products.filter(
                (product) => product.Product.categoryId === category.id
            );
            return acc;
        }, {});

        setFilteredProducts(filtered);
        // console.log("Filtered: ", filtered);
    }
}, [categories, products]);

  return (
    <Box
      sx={{ padding: "50px", justifyContent: "center", alignItems: "center" }}
    >
      {Object.entries(categoryDict).map(([categoryId, title]) => (
        <Box key={categoryId} sx={{ marginBottom: "40px" }}>
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            {title}
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap="30px">
          {filteredProducts[categoryId] && filteredProducts[categoryId].map((item, index) => (
              <Box sx={{ flexShrink: 0 }} key={index}>
                <Card data={item} />
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default Products;
