'use client'
import { Box, Stack, Typography } from "@mui/material";
import Card from '@/components/CardA/Card';
import { Shoe1 } from '@/assets/svg/index';
import { useEffect } from "react";
import { getAll } from "@/Redux/Features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
    const dispatch = useDispatch();
    const productState = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap", gap: "60px", padding: "50px", justifyContent: "center", alignItems: 'center' }}>
            {
                productState.gettingAllProduct &&
                <Typography>Loading...</Typography>
            }

            {
                productState?.allProduct && productState?.allProduct.map((item, index) => (
                    <Box sx={{ flexShrink: 0 }} key={index}>
                        <Card data={item.Product} id={item.id} />
                    </Box>
                ))
            }
            {/* {
                cardArray.map((item, index) => (
                    <Box sx={{ flexShrink: 0 }} key={index}>
                        <Card data={item} />
                    </Box>
                ))
            } */}
        </Box>
    )
}
export default Products;

const cardArray = [
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link: '/product'
    },
];
