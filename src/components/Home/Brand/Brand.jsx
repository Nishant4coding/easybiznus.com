import { Stack, Typography } from "@mui/material";
import Category from "../Category";
import styles from '../home.module.css';
import Products from "./Products";
import { useEffect, useState } from "react";

const Brand = ( dashboardData ) => {
    console.log("main",dashboardData)
    const [selectedCategory, setSelectedCategory] = useState("national");
    const [data, setData] = useState(dashboardData);

    useEffect(() => {
        setData(dashboardData);
    }, [dashboardData]);
    console.log("state",data);

    const handleCategorySelect = (index) => {
        const categories = ["national", "international", "local"];
        setSelectedCategory(categories[index]);
    };

    const selectedData =data?.dashboardData?.find(item => item.filter === selectedCategory);

    return (
        <Stack direction={"column"} className={styles.container} gap={3}>
            <Typography className={styles.title}> Brand </Typography>
            <Category data={catArray}  />
            <Products products={selectedData} />
        </Stack>
    );
}

export default Brand;

const catArray = [
    "NATIONAL",
    "INTERNATIONAL",
    "LOCAL"
];
