"use client";
import { Box, Typography, Stack } from "@mui/material";
import Card from "@/components/CardA/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/Redux/Features/category/categorySlice";
import { getAllProducts } from "@/Redux/Features/product/productSlice";

const ProductsC = () => {
    const dispatch = useDispatch();
    const categoryState = useSelector((state) => state.category);
    console.log(categoryState.categories.categories)
    const productState = useSelector((state) => state.product);
    // const dummyCategoryState = [
    //     {
    //         categories: [
    //             {
    //                 id: '33ef200d-a6b6-4e37-a421-56863d7a1234',
    //                 title: 'Men',
    //                 createdAt: '2024-04-29T16:24:50.055Z',
    //                 updatedAt: '2024-04-29T16:24:50.055Z'
    //             },
    //             {
    //                 id: '761a63b4-22c9-4826-913d-7214da976ec9',
    //                 title: 'Women',
    //                 createdAt: '2024-04-29T16:24:50.055Z',
    //                 updatedAt: '2024-04-29T16:24:50.055Z'
    //             },
    //             {
    //                 id: 'db29bac9-8798-479e-b52a-b34a8b7d1234',
    //                 title: 'Kids',
    //                 createdAt: '2024-04-29T16:24:50.055Z',
    //                 updatedAt: '2024-04-29T16:24:50.055Z'
    //             },
    //             {
    //                 id: '06b5c937-1802-437d-b921-f4b56521f123',
    //                 title: 'Accessories',
    //                 createdAt: '2024-04-29T16:24:50.055Z',
    //                 updatedAt: '2024-04-29T16:24:50.055Z'
    //             },
    //             {
    //                 id: 'd5cd23f2-1869-4baa-9320-a614232d2123',
    //                 title: 'Shoes',
    //                 createdAt: '2024-04-29T16:24:50.055Z',
    //                 updatedAt: '2024-04-29T16:24:50.055Z'
    //             },
    //             {
    //                 id: '27c45ffc-ffba-4d4b-ad59-ae1671f31234',
    //                 title: 'Bags',
    //                 createdAt: '2024-04-29T16:24:50.055Z',
    //                 updatedAt: '2024-04-29T16:24:50.055Z'
    //             }
    //         ]
    //     }
    // ];

    // const dummyProductState = [
    //     {
    //         sellerProduct: [
    //             {
    //                 id: '128d5311-506e-4b87-8dd9-e19b442da250',
    //                 price: '14.00',
    //                 Product: {
    //                     id: '2692c665-c7b3-42e2-a518-2584549dd64f',
    //                     articalName: 'Nike 23-Jordan45-16',
    //                     ProductId: '2692c665-c7b3-42e2-a518-2584549dd64f',
    //                     categoryId: '33ef200d-a6b6-4e37-a421-56863d7a1234'
    //                 }
    //             },
    //             {
    //                 id: '2d92b5a1-596a-482d-86ec-2f74ff7b3a99',
    //                 price: '20.00',
    //                 Product: {
    //                     id: 'c6f4b9c9-72d4-4c79-a7c3-f51e75a6172a',
    //                     articalName: 'Adidas Ultraboost',
    //                     ProductId: 'c6f4b9c9-72d4-4c79-a7c3-f51e75a6172a',
    //                     categoryId: '33ef200d-a6b6-4e37-a421-56863d7a1234'
    //                 }
    //             },
    //             {
    //                 id: 'db29bac9-8798-479e-b52a-b34a8b7d4567',
    //                 price: '25.00',
    //                 Product: {
    //                     id: 'd3b9bac9-8798-479e-b52a-b34a8b7d4567',
    //                     articalName: 'Puma Sports Shoes',
    //                     ProductId: 'd3b9bac9-8798-479e-b52a-b34a8b7d4567',
    //                     categoryId: '761a63b4-22c9-4826-913d-7214da976ec9'
    //                 }
    //             }
    //         ]
    //     }
    // ];

    const [filteredProducts, setFilteredProducts] = useState({});

    useEffect(() => {
        dispatch(getAllCategories()).catch((error) => console.error("Failed to fetch categories: ", error));
        dispatch(getAllProducts()).catch((error) => console.error("Failed to fetch products: ", error));
    }, [dispatch]);

    useEffect(() => {
        // if (categoryState.categories.categories.length > 0 && productState.length > 0) {
           

        //     const filtered = {};
        //     // categoryState.categories.forEach(category => {
        //     //     filtered[category.id] = [productState][0].sellerProduct
        //     //         .filter(product => product.Product.categoryId === category.id)
                   
        //     // });

        //     // console.log("Filtered Products: ", filtered);
        //     setFilteredProducts(filtered);
        // }
    }, [categoryState, productState]);



    return (
        <Box sx={{ padding: "50px", justifyContent: "center", alignItems: 'center' }}>
            {/* {categoryState.categories.categories.map((category) => (
                <Box key={category.id} sx={{ marginBottom: "40px" }}>
                    <Typography variant="h4" sx={{ marginBottom: "20px" }}>{category.title}</Typography>
                    <Stack direction="row" flexWrap="wrap" gap="30px">
                        {filteredProducts[category.id] && filteredProducts[category.id].map((item) => (
                            <Box sx={{ flexShrink: 0 }} key={item.sellerProductId}>
                                <Card data={item} />
                            </Box>
                        ))}
                    </Stack>
                </Box>
            ))} */}
        </Box>
    );
}

export default ProductsC;
