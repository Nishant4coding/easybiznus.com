import BasicBreadcrumbs from "@/components/BreadCrumbs";
import Filter from "@/components/Filter/Filter";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Orders/Container";
import { Box } from "@mui/material";
import global from '@/global.module.css';
import Order from "@/components/Orders/Mobile/Order";

const OrdersPage = () => {
    return (
        <>
            <Box className={global.desktop}>
                <BasicBreadcrumbs inactive={inactive} active="My Orders" fsize={"25px"} mt={"20px"} />
                <Filter filterArray={filterArray} sort={false} />
                <Container />
                <Footer />
            </Box>

            {/* MOBILE */}
            <Box className={global.mobile} style={{ padding:'90px 15px 15px 15px'}}>
                <Order/>
            </Box>
        </>
    )
}

export default OrdersPage;

const inactive = [
    {
        title: 'Home',
        path: '/'
    }
];

const filterArray = [
    {
        title: "On the way"
    },
    {
        title: "Delivered"
    },
    {
        title: "Return"
    }
]

