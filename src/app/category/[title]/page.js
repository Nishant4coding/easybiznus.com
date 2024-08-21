"use client";

import { getAllCategories } from "@/Redux/Features/category/categorySlice";
import { Stack } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryView from "@/components/CategoryView/CategoryView";
import ProductView from "@/components/MobileView/ProductsView/ProductView";
import global from "@/global.module.css";
import { getAll } from "@/Redux/Features/product/productApi";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const params = useParams();
  //same name as name of your file, can be [slug].js; [specialId].js - any name you want
  const { title } = params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setid] = useState("");
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);
  const categories = categoryState.categories.categories;

  useEffect(() => {
    if (categories?.length === 0) {
      dispatch(getAllCategories());
    }
  }, [categories, dispatch]);

  // get title from category id
  useEffect(() => {
    // const title = searchParams.get("title") || "";
    if (categories && categories.length > 0) {
      const category = categories.find(
        (cat) => encodeURIComponent(cat.title) === title
      );
      // console.log("categories", encodeURIComponent(categories[0].title), title);
      if (category) {
        setid(category.id);
      }
    }
  }, [title, categories]);

  // todo: there is no certain way to get the data of filter into ui to select
  // 1. provide the data to filter out not only fields to be filtered
  // 2. from the fields to be filtered, get the data into ui to select
  // 3. on no selection, make filterfrom ui empty array

  const [filterFromUI, setFilterFromUI] = useState([]);

  useEffect(() => {
    if (title !== null && id) {
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
  }, [id, filterFromUI, title]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box className={global.desktop}>
        <CategoryView
          products={products}
          title={decodeURI(title)}
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
