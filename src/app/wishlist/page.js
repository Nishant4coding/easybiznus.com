import Footer from "@/components/Footer/Footer";
import Banner1 from "@/components/Home/Try/Banner";
import Banner2 from "@/components/Wishlist/Banner";
import Container from "@/components/Wishlist/Container";
import global from "@/global.module.css";
import { Box } from "@mui/material";

const WishlistPage = () => {
  //   const wishlistVal = 1;

  return (
    <>
      <Box className={global.desktop}>
        <Banner1 title="New Summer Collection" />
        <Container />
        <Banner2 title="End of Season Sale" />
        <Footer />
      </Box>

      {/* <Box className={global.mobile} >
                {!wishlistVal? <EmptyWishlist /> : <Wishlist/>}
            </Box> */}
    </>
  );
};

export default WishlistPage;
