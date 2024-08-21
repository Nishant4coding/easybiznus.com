import { Box } from "@mui/material";
import BasicBreadcrumbs from "../BreadCrumbs";
import Filter from "../Filter/Filter";
import Products from "./Products";
import Footer from "../Footer/Footer";

const CategoryView = ({ products, title, filterFromUI, setFilterFromUI }) => {
  return (
    <Box>
      <BasicBreadcrumbs inactive={inactive} active={title} />
      <Filter sort={true} filterFromUI={filterFromUI} setFilterFromUI={setFilterFromUI} />
      <Products products={products} />
      <Footer />
    </Box>
  );
};

export default CategoryView;

const inactive = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Category",
    path: "/category/",
  },
];