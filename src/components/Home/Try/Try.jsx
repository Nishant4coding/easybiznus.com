import { Stack, Typography, Box } from "@mui/material";
import Category from "../Category";
import styles from "../home.module.css";
import Products from "../Products";
import { useEffect, useState } from "react";
import fetchDashboardApi from "@/Redux/Features/dashboard/dashboardApi";
import Link from "next/link";

const Try = ({ categories }) => {
  const [selected, setSelected] = useState(categories[0]?.id);
  const [selectedTitle, setselectedTitle] = useState(categories[0]?.id);
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

      var newTitle = categories.filter(({ title, id }) => id == selected);
      if (newTitle.length > 0) {
        console.log("newTitle", newTitle[0].title);
        setselectedTitle(newTitle[0].title);
      }
    }
  }, [selected]);

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
      <Box
        direction={"row"}
        className={styles.products}
        gap={10}
        sx={{ justifyContent: "center" }}
      >
        {active && (
          <Link href={`/category/${selectedTitle}`}>
            <Typography
              sx={{
                border: "2px solid black",
                padding: "2px 24px",
              }}
            >
              View More
            </Typography>
          </Link>
        )}
      </Box>
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
