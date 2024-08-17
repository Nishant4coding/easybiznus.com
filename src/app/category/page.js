"use client";

import CategoryView from "@/components/CategoryView/CategoryView";
import ProductView from "@/components/MobileView/ProductsView/ProductView";
import global from "@/global.module.css";
import { getAll } from "@/Redux/Features/product/productApi";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const title = searchParams.get("title") || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // todo: there is no certain way to get the data of filter into ui to select
  // 1. provide the data to filter out not only fields to be filtered
  // 2. from the fields to be filtered, get the data into ui to select
  // 3. on no selection, make filterfrom ui empty array

  const [filterFromUI, setFilterFromUI] = useState([]);

  useEffect(() => {
    if (id !== null) {
      const filterArray = [
        {
          name: "category",
          values: id && id.length > 0 ? [id] : [],
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
    } else {
      setLoading(false);
    }
  }, [id, filterFromUI]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box className={global.desktop}>
        <CategoryView
          products={products}
          title={title}
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
