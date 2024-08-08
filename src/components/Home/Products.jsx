"use client";
import { Box, Typography } from "@mui/material";
import Card from '@/components/CardA/Card';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from './home.module.css';

const Products = ({prodData}) => {

    console.log("products", prodData);
    return (
        <Box direction={"row"} className={styles.products} gap={10}>
            {
                prodData ? (
                    prodData.map((item, index) => (
                        <Box sx={{flexShrink:0}} key={index}>
                            <Card data={item} />
                        </Box>
                    ))
                ) : (
                    !prodData && (
                        <Typography>No products available</Typography>
                    )
                )
            }
        </Box>
    )
}

export default Products;
