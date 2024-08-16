"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CategoryView from "@/components/CategoryView/CategoryView";
import ProductView from "@/components/MobileView/ProductsView/ProductView";
import global from "@/global.module.css";
import { getAll } from "@/Redux/Features/product/productApi";

const CategoryPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const title = searchParams.get("title") || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id !== undefined) {
      const filterArray = [
        {
          name: "category",
          values: id.length > 0 ? [id] : [],
        },
      ];

      getAll(filterArray)
        .then((data) => {
          if (data && data.filteredProducts) {
            setProducts(data.filteredProducts);
          } else if (data && Array.isArray(data)) {
            setProducts(data);
          } else {
            console.error("Unexpected API response structure:", data);
          }

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box className={global.desktop}>
        <CategoryView products={products} title={title} />
      </Box>
      <Box
        className={global.mobile}
        sx={{ marginTop: "55px", backgroundColor: "#EBEBEB" }}
      >
        <ProductView products={products} />
      </Box>
    </>
  );
};

export default CategoryPage;
