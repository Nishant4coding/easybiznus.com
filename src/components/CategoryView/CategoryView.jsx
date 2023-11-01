import { Box } from "@mui/material";
import BasicBreadcrumbs from "../BreadCrumbs";
import Filter from "../Filter/Filter";
import Products from "./Products";
import Footer from "../Footer/Footer";

const CategoryView = ()=>{
    return(
        <Box>
            <BasicBreadcrumbs inactive={inactive} active='Running'/>
            <Filter filterArray={filterArray} sort={true}/>
            <Products/>
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
        title:'Men',
        path:'#'
    },
    {
        title:'Shoes',
        path:'#'
    }
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
