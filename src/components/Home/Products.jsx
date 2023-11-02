import { Box } from "@mui/material";
import Card from '@/components/CardA/Card';
import { Shoe1 } from '@/assets/svg/index';
import styles from './home.module.css';

const Products = () => {
    return (
        <Box direction={"row"} className={styles.products} gap={10}>
            {
                cardArray.map((item, index) => (
                    <Box sx={{flexShrink:0}} key={index}>
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
        link:'/category'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link:'/category'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link:'/category'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link:'/category'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link:'/category'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link:'/category'
    },
    {
        discount: '-20%',
        image: Shoe1,
        title: 'Nike Air Max Plus',
        style: 'DX4326-001',
        sp: '₹15,990',
        mrp: '₹19,990',
        link:'/category'
    }
];
