"use client";
import { Box, Stack, Typography } from "@mui/material";
import { star } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import styles from "./product.module.css";

const Service = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{ fontWeight: "700", fontSize: "13px", marginBottom: "15px" }}
      >
        Services Available
      </Typography>
      <Stack direction={"row"} gap={1.5}>
        {/* <Box className={styles.button} style={{width:"100px"}}>
                    Try & Buy
                </Box> */}
        <Box className={styles.button} style={{ width: "100px" }}>
          Returnable
        </Box>
        <Box className={styles.button} style={{ width: "100px" }}>
          <IonIcon icon={star}></IonIcon>
          4.5
        </Box>
      </Stack>
    </Box>
  );
};

export default Service;
