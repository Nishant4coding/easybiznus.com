import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Description = ({ des }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const threshold = 200;

  if (!des) return null;
  const shouldShowReadMore = des.length > threshold;
  const displayedText =
    isExpanded || !shouldShowReadMore ? des : des.slice(0, threshold) + "...";

  return (
    <Box sx={{ width: "100%" }}>
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
          {displayedText}
        </Typography>
        <Box>
          {/* <Typography sx={{ fontSize: "11px" }}>Style : 30780QR</Typography> */}
          {/* <Typography sx={{ fontSize: "11px" }}>Color : {MagniBlack}</Typography> */}
        </Box>
        {shouldShowReadMore && (
          <Box
            sx={{ fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Description;
