import { Stack, Typography, Box } from "@mui/material";
import styles from "./product.module.css";
import Size from "./Size";
import Quantity from "./Quantity";
import Pincode from "./Pincode";
import Service from "./Service";
import Description from "./Description";
import Shipping from "./Shipping";


const PriceSection = ({handleOpen, setPopTitle}) => {
    return (
        <Stack className={styles.pricesection}>
            <Stack direction={"column"} sx={{marginBottom:"10px"}}>
                <Typography className={styles.priceheading}>Product Name</Typography>
                <Typography className={styles.pricesubhead}>Product Category</Typography>
                <Stack direction={"row"} gap={1}>
                    <Typography style={{ fontSize: "14px" }}>MRP:</Typography>
                    <Stack direction={"column"} sx={{ alignItems: "center" }} gap={0}>
                        <Typography className={styles.sp}>₹15,990</Typography>
                        <Box>
                            <Typography className={styles.mrp}>₹19,990</Typography>
                            <Typography className={styles.cutline}></Typography>
                        </Box>
                    </Stack>
                </Stack>
                <Typography className={styles.declaratiob}>Inclusive of Taxes</Typography>
                <Typography className={styles.declaratiob}>(Also include all application duties)</Typography>
            </Stack>
            <Typography className={styles.linebreak}></Typography>
            <Stack direction={"column"} sx={{padding:"10px 0px 10px 25px"}}>
                <Size/>
                <Quantity handleOpen={handleOpen} setPopTitle={setPopTitle}/>
                <Pincode/>
            </Stack>
            <Typography className={styles.linebreak}></Typography>
            <Stack direction={"column"} sx={{padding:"10px 0px 10px 25px"}}>
                <Service/>
            </Stack>
            <Typography className={styles.linebreak}></Typography>
            <Stack direction={"column"} sx={{padding:"10px 0px 10px 25px"}}>
                <Description/>
            </Stack>
            <Typography className={styles.linebreak}></Typography>
            <Stack direction={"column"} sx={{padding:"10px 0px 10px 25px"}}>
                <Shipping/>
            </Stack>
        </Stack>
    )
}

export default PriceSection;