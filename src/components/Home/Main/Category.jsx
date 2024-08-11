import { Box, Link } from "@mui/material";
import Card from "@/components/CardC/Card";
import { Men, Women, Kids } from "@/assets/svg/index";
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
        <Box key={index} sx={{ flexShrink: 0 }}>
          <Link href={item.link} sx={{ textDecoration: "none" }}>
            <Card data={item} />
          </Link>
        </Box>
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
    link:"/category/men"
  },
  {
    image: Women,
    title: "Women's Collection",
    style: "500+",
     link:"/category/women"
  },

  {
    image: Kids,
    title: "Kid's Collection",
    style: "500+",
     link:"/category/kids"
  },
];
