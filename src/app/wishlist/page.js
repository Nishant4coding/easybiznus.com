import Container from "@/components/Wishlist/Container";
import Banner1 from "@/components/Home/Try/Banner";
import Banner2 from "@/components/Wishlist/Banner";
import Footer from "@/components/Footer/Footer";


const Page = ()=>{
    return(
        <>
        <Banner1 title="New Summer Collection"/>
        <Container/>
        <Banner2 title="End of Season Sale"/>
        <Footer/>
        </>
    )
}

export default Page;