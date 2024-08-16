import { Box } from "@mui/material";
import styles from "./carousel.module.css";
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
      {banners.length > 0 && (
        <Box className={styles.container}>
          <Image
            src={banners[0]?.imagePath}
            alt={"carousel-image"}
            className={styles.image}
            style={{
              objectFit: "cover",
            }}
            width={500}
            height={500}
          />
        </Box>
      )}
    </>
  );
};

export default Carousel;
