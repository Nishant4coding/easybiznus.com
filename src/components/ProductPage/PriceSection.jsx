import { Stack, Typography, Box } from "@mui/material";
import styles from "./product.module.css";
import Size from "./Size";
import Quantity from "./Quantity";
import Pincode from "./Pincode";
import Service from "./Service";
import Description from "./Description";
import Shipping from "./Shipping";


const PriceSection = ({ handleOpen, setPopTitle, data }) => {
    

    function capitalizeEachWord(sentence) {
        return sentence.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    }

    return (
        <Stack className={styles.pricesection}>
            <Stack direction={"row"} gap={5} sx={{ alignItems: 'center' }}>
                <Stack direction={"column"} sx={{ marginBottom: "10px" }}>
                    <Typography className={styles.priceheading}>{data.name ? capitalizeEachWord(data.name) : 'Product Name'}</Typography>
                    <Typography className={styles.pricesubhead}>Product Category</Typography>
                    <Stack direction={"row"} gap={1}>
                        <Typography style={{ fontSize: "14px" }}>MRP:</Typography>
                        <Stack direction={"column"} sx={{ alignItems: "center" }} gap={0}>
                            <Typography className={styles.sp}>₹{data.salePrice ? data.salePrice : '15,990'}</Typography>
                            <Box>
                                <Typography className={styles.mrp}>₹{data.MRP ? data.MRP : '19, 990'}</Typography>
                                <Typography className={styles.cutline}></Typography>
                            </Box>
                        </Stack>
                    </Stack>
                    <Typography className={styles.declaratiob}>Inclusive of Taxes</Typography>
                    <Typography className={styles.declaratiob}>(Also include all application duties)</Typography>
                </Stack>
                <Typography sx={{ fontWeight: '600', fontSize: '18px', letterSpacing: '0px' }}>
                    {(data.salePrice - data.MRP) ? Math.ceil((Math.abs(data.salePrice - data.MRP)/data.MRP)*100) : '20'}
                    % OFF
                </Typography>
            </Stack>
            <Typography className={styles.linebreak}></Typography>
            <Stack direction={"column"} sx={{ padding: "10px 0px 10px 25px", width: '100%' }}>
                <Size />
                <Quantity handleOpen={handleOpen} setPopTitle={setPopTitle} />
                <Pincode />
            </Stack>
            <Typography className={styles.linebreak}></Typography>
            <Stack direction={"column"} sx={{ padding: "10px 0px 10px 25px" }}>
                <Service />
            </Stack>
            <Typography className={styles.linebreak}></Typography>
            <Stack direction={"column"} sx={{ padding: "10px 0px 10px 25px" }}>
                <Description data={data}/>
            </Stack>
            <Typography className={styles.linebreak}></Typography>
            <Stack direction={"column"} sx={{ padding: "10px 0px 10px 25px" }}>
                <Shipping />
            </Stack>
        </Stack>
    )
}

export default PriceSection;