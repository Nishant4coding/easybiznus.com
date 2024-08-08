import { Box } from "@mui/material";
import styles from './carousel.module.css';
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getActiveAdvertisements } from "@/Redux/Features/banner/bannerSlice";
import { useEffect } from "react";

const Carousel = () => {

    const dispatch = useDispatch();
    const { banners, loading, error } = useSelector((state) => state.banner);
  
    useEffect(() => {
      dispatch(getActiveAdvertisements());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            {banners.map((banner, index) => (
                <Box className={styles.container} key={index}>
                    <Image
                        src={banner.imagePath} 
                        alt={`carousel-image-${index}`}
                        className={styles.image}
                        layout="fill" 
                        objectFit="cover"
                    />
                </Box>
            ))}
        </>
    );
};

export default Carousel;
