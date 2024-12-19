"use client";

import { getAllCategories } from "@/Redux/Features/category/categorySlice";
import { Stack } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./nav.module.css";

const Navlink = ({ search }) => {
  // get all the catregories
  const dispatch = useDispatch();
  const [catArr, setcatArr] = useState(navArray);
  const categoryState = useSelector((state) => state.category?.categories);
  useEffect(() => {
    if (!categoryState?.categories?.length) {
      dispatch(getAllCategories());
    }
  }, [categoryState, dispatch]);

  useEffect(() => {
    if (categoryState?.categories?.length) {
      // compair all the cat title with the categoryState
      // and upate the url
      var tempcatArr = catArr.map((cat) => {
        let available = categoryState?.categories?.find(
          (c) => c?.title.toLowerCase() === cat?.title.toLowerCase()
        );
        return available
          ? {
            ...cat,
            path: `/category/${available?.title}`,
          }
          : { ...cat, path: `/category/${cat?.title}` };
      });
      setcatArr(tempcatArr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryState]);

  return (
    <>
      <Stack
        direction="row"
        spacing={4}
        className={[styles.navlink, search ? styles.navlinkfocus : ""]}
      >
        {catArr.map((link, index) => (
          <Link
            key={index}
            href={link?.path}
            className={styles.link}
            sx={{ textDecoration: "none" }}
          >
            {link?.title}
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default Navlink;

const navArray = [
  {
    title: "Women",
    path: `/category/women`,
  },
  {
    title: "Men",
    path: `/category/men`,
  },
  {
    title: "Shoes",
    path: `/category/shoes`,
  },
  {
    title: "Formal shoes",
    path: `/category/Formal%20shoes`,
  },
  // {
  //     title: "Offers",
  //     path: "#"
  // }
];
