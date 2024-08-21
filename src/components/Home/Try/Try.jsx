import { Stack, Typography } from "@mui/material";
import Category from "../Category";
import styles from "../home.module.css";
import Products from "../Products";
import { useEffect, useState } from "react";
import fetchDashboardApi from "@/Redux/Features/dashboard/dashboardApi";

const Try = ({ categories }) => {
  const [selected, setSelected] = useState(categories[0]?.id);
  const [active, setActive] = useState([]);

  useEffect(() => {
    if (selected) {
      fetchDashboardApi([
        {
          name: "category",
          value: selected,
        },
      ])
        .then((res) => {
          setActive(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [ selected]);

  return (
    <Stack direction={"column"} className={styles.container} gap={2.5}>
      <Typography className={styles.title}> All Categories </Typography>
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
