import { Box, Stack, Typography } from "@mui/material";
import styles from './card.module.css';
import { Shoe1 as image } from '@/assets/svg/index';
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const Card = ({ data, id }) => {
    const { MRP, salePrice, sku, name, link } = data;
    const discount = useMemo(() => {
        return Math.ceil(((MRP - salePrice) / MRP) * 100);
    }, [MRP, salePrice])

    function capitalizeEachWord(sentence) {
        return sentence.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    }

    return (
        <Box className={styles.container}>
            <Link href={link ? link : `/product/${id}`}>
                <Typography className={styles.discount}>{discount}%</Typography>
                <Image src={image} alt={"product"} className={styles.image} />
                <Stack direction={"row"} sx={{ justifyContent: "space-between", marginTop: "20px", padding: "0 10px" }}>
                    <Stack direction={"column"}>
                        <Typography className={styles.title}>{capitalizeEachWord(name)}</Typography>
                        <Typography className={styles.subtitle}>Style: {sku.toUpperCase()}</Typography>
                    </Stack>
                    <Stack direction={"column"} sx={{ alignItems: "center" }} gap={0}>
                        <Typography className={styles.sp}>₹{salePrice}</Typography>
                        <Box>
                            <Typography className={styles.mrp}>₹{MRP}</Typography>
                            <Typography className={styles.cutline}></Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Link>
        </Box>
    )
}

export default Card;