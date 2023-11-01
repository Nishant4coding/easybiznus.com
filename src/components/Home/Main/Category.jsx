import { Box } from "@mui/material";
import Card from '@/components/CardC/Card';
import { Men, Women, Kids } from '@/assets/svg/index';
import styles from '../home.module.css';

const Category = () => {
    return (
        <Box direction={"row"} className={styles.products} gap={8} sx={{justifyContent:"center"}}>
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

export default Category;

const cardArray = [
    {
        image: Men,
        title: "Men's Collection",
        style: '500+',
    },
    {
        image: Women,
        title: "Women's Collection",
        style: '500+',
    },

    {
        image: Kids,
        title: "Kid's Collection",
        style: '500+',
    }
];
