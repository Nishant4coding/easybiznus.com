import { Kids, Men, Women } from "@/assets/svg/index";
import Card from "@/components/CardC/Card";
import { Box } from "@mui/material";
import Link from "next/link";
import styles from "../home.module.css";

const Category = () => {
  return (
    <Box
      direction={"row"}
      className={styles.products}
      gap={8}
      sx={{ justifyContent: "center" }}
    >
      {cardArray.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          sx={{ flexShrink: 0, textDecoration: "none" }}
        >
          <Card data={item} />
        </Link>
      ))}
    </Box>
  );
};

export default Category;

const cardArray = [
  {
    image: Men,
    title: "Men's Collection",
    style: "500+",
    link: "/category?section=men",
  },
  {
    image: Women,
    title: "Women's Collection",
    style: "500+",
    link: "/category?section=women",
  },

  {
    image: Kids,
    title: "Kid's Collection",
    style: "500+",
    link: "/category?section=kids",
  },
];
