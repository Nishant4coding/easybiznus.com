import { Stack, Typography } from "@mui/material";
import Card from "../CardD/Card";
import styles from '@/components/Wishlist/wishlist.module.css';

const Container = () => {

    return (
        <Stack direction={"column"} className={styles.container} gap={3} style={{ marginBottom: "30px" }}>
            <Typography className={styles.title}>MY SHOPPING CART {prodArray && `[ ${prodArray.length} ]`}</Typography>
            <Stack direction={"column"} gap={1.8}>
                {
                    prodArray.map((item, index) => {
                        return (
                            <Card data={item} key={index} edit={false}/>
                        )
                    })
                }
            </Stack>

        </Stack>
    )
}

export default Container;

const prodArray = [
    {
        title: "Mercedes AMG Petronas F1, Wired Run Unisex Sneakers",
        color: "Warm White Inky-Blue",
        size: "8",
        sku_code: "99845_01",
        price: "₹15,990",
    },
    {
        title: "Mercedes AMG Petronas F1, Wired Run Unisex Sneakers",
        color: "Warm White Inky-Blue",
        size: "8",
        sku_code: "99845_01",
        price: "₹15,990",
    }
]