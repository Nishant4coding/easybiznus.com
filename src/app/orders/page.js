import BasicBreadcrumbs from "@/components/BreadCrumbs";
import Filter from "@/components/Filter/Filter";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Orders/Container";

const Page = ()=>{
    return(
        <>
        <BasicBreadcrumbs inactive={inactive} active="My Orders" fsize={"25px"} mt={"20px"}/>
        <Filter filterArray={filterArray} sort={false}/>
        <Container/>
        <Footer/>
        </>
    )
}

export default Page;

const inactive =[
    {
        title:'Home',
        path:'/'
    }
];

const filterArray=[
    {
        title:"On the way"
    },
    {
        title:"Delivered"
    },
    {
        title:"Return"
    }
]

