"use client";

import CategoryView from "@/components/CategoryView/CategoryView";
import ProductView from "@/components/MobileView/ProductsView/ProductView";
import global from "@/global.module.css";
import { getAll } from "@/Redux/Features/product/productApi";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterFromUI, setFilterFromUI] = useState([]);

  useEffect(() => {
    const filterArray = [
      {
        name: "category",
        values: [],
      },
      ...filterFromUI,
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
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box className={global.desktop}>
        <CategoryView
          products={products}
          title={""}
          filterFromUI={filterFromUI}
          setFilterFromUI={setFilterFromUI}
        />
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
