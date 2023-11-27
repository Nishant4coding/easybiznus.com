import { Box, Stack, Typography } from "@mui/material";
import styles from './product.module.css';

const Size = () => {
    return (
        <Box className={styles.size}>
            <Typography className={styles.heading} style={{ marginLeft: "2px", marginBottom: "0px", fontSize: "12px" }}>Select Size</Typography>
            <Stack direction={"row"} sx={{flexWrap:'wrap'}}>
                {
                    sizeArray.map((item, index) => (
                        <Typography key={index} className={item.available ? styles.sizebox : styles.unavailablesizebox}>{item.size}</Typography>
                    ))
                }
            </Stack>
            <Stack direction={"row"}>
                {
                    colorArray.map((item, index) => (
                        <Typography key={index} sx={{marginRight:"10px", marginTop:"20px", fontSize:"13px"}}>{item}</Typography>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default Size;

const sizeArray = [
    {
        size: 6,
        available: true
    },
    {
        size: 7,
        available: true
    },
    {
        size: 8,
        available: false
    },
    {
        size: 9,
        available: true
    },
    {
        size: 10,
        available: true
    },
    {
        size: 11,
        available: true
    },
    {
        size: 12,
        available: true
    }
];

const colorArray = [
    "Black", "Red", "Grey"
];

const button={
    color:"black",
    backgroundColor:"red"
}
