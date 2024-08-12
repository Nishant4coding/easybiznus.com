import { Box, Stack } from "@mui/material";
import Link from "next/link";
import styles from "./nav.module.css";
import { getAllCategories } from "@/Redux/Features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Navlink = ({ search }) => {


  // get all the catregories
  const dispatch = useDispatch();
  const [catArr, setcatArr] = useState(navArray);
  const categoryState = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  // useEffect(() => {
  //   if (categoryState.categories.categories?.length) {
  //     // compair all the cat title with the categoryState
  //     // and upate the url
  //     console.log("Original catArr:", catArr);
  //     var tempcatArr = catArr.map((cat) => {
  //       let available = categoryState.categories.categories?.find(
  //         (c) => c.title.toLowerCase() === cat.title.toLowerCase()
  //       );
  //       console.log(`Category for ${cat.title}:`, available);
  //       return available
  //         ? { ...cat, path: `/category/?title=${available.title}` }
  //         : { ...cat, path: `/category/?title=${cat.title}` };
  //       // ? { ...cat, path: `/category/?title=${available.title}` }
  //       // : cat;
  //     });
  //     console.log("new categoryState", tempcatArr);
  //     setcatArr(tempcatArr)
  //   }
  //   console.log("categoryState", categoryState.categories.categories);
  // }, [categoryState]);


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
  
