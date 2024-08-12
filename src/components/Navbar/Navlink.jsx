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
  const categoryState = useSelector((state) => state.category);
  useEffect(() => {
    if (!categoryState.categories.categories?.length) {
      dispatch(getAllCategories());
    }
  }, [dispatch, categoryState.categories]);

  useEffect(() => {
    if (categoryState.categories.categories?.length) {
      // compair all the cat title with the categoryState
      // and upate the url
      var tempcatArr = catArr.map((cat) => {
        let available = categoryState.categories.categories?.find(
          (c) => c.title.toLowerCase() === cat.title.toLowerCase()
        );
        return available
          ? {
            ...cat,
            path: `/category/?id=${available.id}&title=${available.title}`,
          }
          : { ...cat, path: `/category/?id=${cat.id}&title=${cat.title}` };
      });
      setcatArr(tempcatArr);
    }
  }, [catArr, categoryState]);

  return (
    <>
      <Stack
        direction="row"
        spacing={4}
        className={[styles.navlink, search ? styles.navlinkfocus : ""]}
      >
        {catArr.map((link, index) => (
          <Link key={index} href={link.path} className={styles.link}>
            {link.title}
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
    path: `/category?title=women`,
  },
  {
    title: "Men",
    path: `/category?title=men`,
  },
  {
    title: "Shoes",
    path: `/category?title=shoes`,
  },
  {
    title: "Sport Shoes",
    path: `/category?title=sport%20shoes`,
  },
  // {
  //     title: "Offers",
  //     path: "#"
  // }
];
