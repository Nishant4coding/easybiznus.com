import { useState } from "react";
import styles from "./home.module.css";
import { Stack, Typography } from "@mui/material";

const Category = ({ data, selected, setSelected }) => {
  return (
    <Stack direction={"row"} gap={10}>
      {data.map(({ title, id }, index) => (
        <Typography
          key={index}
          onClick={() => setSelected(id)}
          className={selected === id ? styles.catTitle : ""}
          sx={{ cursor: "pointer" }}
        >
          {title}
        </Typography>
      ))}
    </Stack>
  );
};

export default Category;
