import Container from "@/components/Wishlist/Container";
import Banner1 from "@/components/Home/Try/Banner";
import Banner2 from "@/components/Wishlist/Banner";
import Footer from "@/components/Footer/Footer";
import { Box } from "@mui/material";
import global from "@/global.module.css";
import EmptyWishlist from "@/components/MobileView/EmptyWishlist/EmptyWishlist";


const WishlistPage = () => {
    return (
        <>
            <Box className={global.desktop}>
                <Banner1 title="New Summer Collection" />
                <Container />
                <Banner2 title="End of Season Sale" />
                <Footer />
            </Box>

            <Box className={global.mobile}>
                <EmptyWishlist />
            </Box>
        </>
    )
}

export default WishlistPage;