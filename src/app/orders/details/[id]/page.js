"use client"

import BasicBreadcrumbs from "@/components/BreadCrumbs";
import Filter from "@/components/Filter/Filter";
import Footer from "@/components/Footer/Footer";
import Details from "@/components/Orders/Details";
import Help from "@/components/Orders/Help";
import { Box } from "@mui/material";
import global from '@/global.module.css';
import MobileDetails from "@/components/Orders/Mobile/Details";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrders } from "@/Redux/Features/orderHistory/orderHistorySlice";


const OrderDetails = ({ params }) => {
    const dispatch = useDispatch();
    const { orders, loading, error } = useSelector((state) => state.order);
  
    useEffect(() => {
      dispatch(fetchOrders());
    }, [dispatch]);
  
    console.log(orders)


    const { id } = params;

    return (
        <>
            {/* DESKTOP */}
            <Box className={global.desktop}>
                <BasicBreadcrumbs inactive={inactive} active={`${id}`} fsize={"20px"} mt={"15px"} />
                <Filter filterArray={filterArray} sort={false} />
                <Details bill={true} stepper={true} data={orders}/>
                <Help id={id}/>
                <Footer />
            </Box>

            {/* MOBILE */}
            <Box className={global.mobile} style={{ padding: '90px 15px 15px 15px' }}>
                <MobileDetails id={id}/>
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
