import { Box } from "@mui/material";
import BasicBreadcrumbs from "../BreadCrumbs";
import Filter from "../Filter/Filter";
import Products from "./Products";
import Footer from "../Footer/Footer";

const CategoryView = ({products,title})=>{
    return(
        <Box>
            <BasicBreadcrumbs inactive={inactive} active={title}/>
            <Filter filterArray={filterArray} sort={true}/>
            <Products products={products}/>
            <Footer/>
        </Box>
    )
}

export default CategoryView;

const inactive =[
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Category',
        path:'/'
    },
];

const filterArray=[
    {
        title:"Category"
    },
    {
        title:"Product Type"
    },
    {
        title:"Price"
    },
    {
        title:"Gender"
    },
    {
        title:"Size"
    },
    {
        title:"Color"
    },
    {
        title:"Discount"
    },
    {
        title:"Activity"
    }
]
