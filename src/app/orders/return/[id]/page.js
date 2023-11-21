import BasicBreadcrumbs from "@/components/BreadCrumbs";
import Filter from "@/components/Filter/Filter";
import Footer from "@/components/Footer/Footer";
import Details from "@/components/Orders/Details";
import Help from "@/components/Orders/Help2";
import { Box } from "@mui/material";
import global from '@/global.module.css';
import Return from "@/components/Orders/Mobile/Return";


const OrderDetails = ({ params }) => {
    const { id } = params;

    return (
        <>
            {/* DESKTOP */}
            <Box className={global.desktop}>
                <BasicBreadcrumbs inactive={inactive} active={`${id}`} fsize={"20px"} mt={"15px"} />
                <Filter filterArray={filterArray} sort={false} />
                <Details rtrn={true}/>
                <Help />
                <Footer />
            </Box>

            {/* MOBILE */}
            <Box className={global.mobile} style={{ padding: '90px 15px 15px 15px' }}>
                <Return />
            </Box>
        </>
    )
}

export default OrderDetails;

const inactive = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'My Orders',
        path: '/orders'
    }
];

const filterArray = [
    {
        title: "On the way"
    },
]
