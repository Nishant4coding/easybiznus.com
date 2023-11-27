import CategoryView from "@/components/CategoryView/CategoryView";
import ProductView from "@/components/MobileView/ProductsView/ProductView";
import global from "@/global.module.css";
import { Box } from "@mui/material";

const CategoryPage = (props) => {
    return (
        <>
            <Box className={global.desktop}>
                <CategoryView />
            </Box>
            <Box className={global.mobile} sx={{marginTop:"55px", backgroundColor:"#EBEBEB"}} >
                <ProductView/>
            </Box>
        </>
    )
}

export default CategoryPage;