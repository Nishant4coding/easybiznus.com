import { Box, Stack } from "@mui/material";
import Card from '@/components/CardA/Card';
import { Shoe1 } from '@/assets/svg/index';

const Products = () => {
    return (
        <Box sx={{ display: "flex", width:"100%", flexWrap:"wrap", gap:"60px", padding:"50px", justifyContent:"center"}}>
            {
                cardArray.map((item, index) => (
                    <Box sx={{ flexShrink: 0 }} key={index}>
                        <Card data={item} />
                    </Box>
                ))
            }
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
