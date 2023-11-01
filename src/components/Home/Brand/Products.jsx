import { Box } from "@mui/material";
import Card from '@/components/CardB/Card';
import { Shoe2 } from '@/assets/svg/index';
import styles from '../home.module.css';

const Products = () => {
    return (
        <Box direction={"row"} className={styles.products} gap={8}>
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
        image: Shoe2,
        title: 'NIVIA FOOTBALL SHOES',
        style: '400+',
    },
    {
        image: Shoe2,
        title: 'NIVIA FOOTBALL SHOES',
        style: '400+',
    },

    {
        image: Shoe2,
        title: 'NIVIA FOOTBALL SHOES',
        style: '400+',
    },
    {
        image: Shoe2,
        title: 'NIVIA FOOTBALL SHOES',
        style: '400+',
    },
    {
        image: Shoe2,
        title: 'NIVIA FOOTBALL SHOES',
        style: '400+',
    },
    {
        image: Shoe2,
        title: 'NIVIA FOOTBALL SHOES',
        style: '400+',
    },
    {
        image: Shoe2,
        title: 'NIVIA FOOTBALL SHOES',
        style: '400+',
    },
    {
        image: Shoe2,
        title: 'NIVIA FOOTBALL SHOES',
        style: '400+',
    },
];
