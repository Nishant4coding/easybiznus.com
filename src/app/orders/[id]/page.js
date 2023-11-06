import BasicBreadcrumbs from "@/components/BreadCrumbs";
import Filter from "@/components/Filter/Filter";
import Footer from "@/components/Footer/Footer";
import Details from "@/components/Orders/Details";
import Help from "@/components/Orders/Help";

const OrderDetails = ({params}) => {
    const {id} = params;

    return (
        <>
        <BasicBreadcrumbs inactive={inactive} active={`${id}`} fsize={"20px"} mt={"15px"}/>
        <Filter filterArray={filterArray} sort={false}/>
        <Details/>
        <Help />
        <Footer/>
        </>
    )
}

export default OrderDetails;

const inactive =[
    {
        title:'Home',
        path:'/'
    },
    {
        title:'My Orders',
        path:'/orders'
    }
];

const filterArray=[
    {
        title:"On the way"
    },
]
