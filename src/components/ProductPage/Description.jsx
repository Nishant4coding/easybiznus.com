import { Box, Typography, Stack } from "@mui/material";
import Link from "next/link";

const Description = ({ des }) => {
  if (des) {
    return (
      <Box sx={{ width: "100%" }}>
        {console.log(des)}
        <Typography
          sx={{ fontWeight: "700", fontSize: "13px", marginBottom: "15px" }}
        >
          Description
        </Typography>
        <Stack
          direction={"column"}
          gap={2}
          sx={{ width: "100%", paddingLeft: "20px" }}
        >
          <Typography sx={{ fontSize: "11px", textAlign: "justify" }}>
            {des}
          </Typography>
          <Box>
            <Typography sx={{ fontSize: "11px" }}>Style : 30780QR</Typography>
            <Typography sx={{ fontSize: "11px" }}>
              Color : MagniBlack
            </Typography>
          </Box>
          <Box
            sx={{ fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
            href="#"
          >
            Read More
          </Box>
        </Stack>
      </Box>
    );
  }
  return null;
};

export default Description;

const desData =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere, deleniti quod aut quia obcaecati quaerat enim, mollitia amet odit omnis repudiandae et minima alias quidem esse ut.";
