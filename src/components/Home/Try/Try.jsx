import { Stack, Typography } from "@mui/material";
import Category from "../Category";
import styles from "../home.module.css";
import Products from "../Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import productApi from "@/Redux/Features/product/productApi";

const Try = ({ categories }) => {
  // console.log("try", categories[0]?.title);
  // console.log("try", categories);
  const [selected, setSelected] = useState(categories[0]?.id);
  const [active, setActive] = useState([]);

  useEffect(() => {
    if (categories && selected) {
      productApi
        .getAll([
          {
            name: "category",
            value: categories[0]?.id,
          },
        ])
        .then((res) => {
          setActive(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selected]);

  return (
    <Stack direction={"column"} className={styles.container} gap={2.5}>
      <Typography className={styles.title}> TRY & BUY </Typography>
      <Category
        data={categories.map(({ title, id }) => {
          return { title, id };
        })}
        selected={selected}
        setSelected={setSelected}
      />
      {active.length < 0 ? (
        <Typography>Loading...</Typography>
      ) : (
        <Products prodData={active} />
      )}
      <Products />
    </Stack>
  );
};

export default Try;

// const catArray = [
//     "SPORTS SHOES",
//     "SANDALS",
//     "LOAFERS",
//     "SNEAKERS"
// ];
