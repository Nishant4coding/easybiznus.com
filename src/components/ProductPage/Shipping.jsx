import { Box, Typography, Stack } from "@mui/material";
import Link from "next/link";

const Shipping = () => {
    return (
        <Box sx={{ width: "100%" }}>
            <Typography sx={{ fontWeight: "700", fontSize: "13px", marginBottom: "15px" }}>Shipping and Returns</Typography>
            <Stack direction={"column"} gap={2} sx={{ width: "100%", paddingLeft: "20px" }}>
                <Typography sx={{ fontSize: "11px", textAlign: "justify" }}>
                    {/* {shipData} */}
                </Typography>
                <Typography sx={{ fontSize: "11px" }}>For any queries, please contact Cutomer Service at
                    <Link href="#" style={{ fontSize: "11px", fontWeight: "700", textDecoration: "underline", margin: "0 5px" }}>1900-00232 {" "}</Link>
                    or Email Us at
                    <Link href="#" style={{ fontSize: "11px", fontWeight: "700", textDecoration: "underline", margin: "0 5px" }}>CustomerHelp@Shoematol.com {" "}</Link>
                </Typography>
            </Stack>
        </Box>
    )
}

export default Shipping;

const shipData ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere, deleniti quod aut quia obcaecati quaerat enim, mollitia amet odit omnis repudiandae et minima alias quidem esse ut."
