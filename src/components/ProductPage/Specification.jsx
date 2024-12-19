"use client";
import { IonIcon } from "@ionic/react";
import { Box, Stack, Typography } from "@mui/material";
import { ellipse } from "ionicons/icons";
import styles from "./product.module.css";

const Specification = ({ spec }) => {
  const specArray = [
    {
      title: "Material Type :",
      body: spec?.soleMaterialType?.material_type,
    },
    {
      title: "Shoe Width: ",
      body: spec?.width,
    },
    {
      title: "Material Name: ",
      body: spec?.soleMaterialType?.material_name,
    },
  ];

  return (
    <Stack direction={"row"} className={styles.description}>
      <Stack
        direction={"column"}
        sx={{ width: "50%", padding: "30px 0 30px 40px" }}
        spacing={3}
      >
        <Box>
          <Typography className={styles.heading}>SPECIFICATION</Typography>
          {specArray.map(
            (item, index) =>
              item.body && (
                <Typography key={index} className={styles.subheading}>
                  <IonIcon icon={ellipse} style={{ width: "4px" }} />
                  {item?.title}
                  {item?.body}
                </Typography>
              )
          )}
        </Box>
        {spec?.manufacturerAddress && (
          <Box>
            <Typography className={styles.heading}>
              {"Manufacturer's Address"}
            </Typography>
            <Typography className={styles.subheading}>
              <IonIcon icon={ellipse} style={{ width: "4px" }} />
              {spec?.manufacturerAddress}
            </Typography>
          </Box>
        )}
      </Stack>
      <Stack
        direction={"column"}
        sx={{ width: "50%", padding: "30px 0 30px 40px" }}
        spacing={3}
      >
        {spec?.countryOfOrigin && (
          <Box>
            <Typography className={styles.heading}>
              Country of Origin
            </Typography>
            <Typography className={styles.subheading}>
              <IonIcon icon={ellipse} style={{ width: "4px" }} />
              {spec?.countryOfOrigin}
            </Typography>
          </Box>
        )}
        <Box>
          <Typography className={styles.heading}>
            Features and Benefits
          </Typography>
          {specArray.map(
            (item, index) =>
              item?.body && (
                <Typography key={index} className={styles.subheading}>
                  <IonIcon icon={ellipse} style={{ width: "4px" }} />
                  {item?.title}
                  {item?.body}
                </Typography>
              )
          )}
        </Box>
      </Stack>
    </Stack>
  );
};

export default Specification;
