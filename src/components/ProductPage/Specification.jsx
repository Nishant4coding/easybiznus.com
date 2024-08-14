'use client'
import { Box, Stack, Typography } from "@mui/material";
import styles from './product.module.css';
import { ellipse } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Specification = ({spec}) => {

    
const specArray = [
    {
        title: 'Material Type :',
        body: spec.soleMaterialType.material_type
    },
    {
        title: 'Shoe Width: ',
        body: spec.width
    },
    {
        title: 'material name: ',
        body: spec.soleMaterialType.material_name
    }
]

    console.log("details", spec);
    return (
        <Stack direction={"row"} className={styles.description}>
            <Stack direction={"column"} sx={{ width: "50%", padding: "30px 0 30px 40px" }} spacing={3}>
                <Box>
                    <Typography className={styles.heading} >SPECIFICATION</Typography>
                    {
                        specArray.map((item, index) => (
                            <Typography key={index} className={styles.subheading}>
                                <IonIcon icon={ellipse} style={{ width: "4px" }}></IonIcon>
                                {item.title}{item.body}
                            </Typography>
                        ))
                    }
                </Box>
                <Box>
                    <Typography className={styles.heading}>{"Manufacturer's Address"}</Typography>
                    <Typography className={styles.subheading}>
                                <IonIcon icon={ellipse} style={{ width: "4px" }}></IonIcon>
                                Banglore, India
                            </Typography>
                </Box>
            </Stack>
            <Stack direction={"column"} sx={{ width: "50%", padding: "30px 0 30px 40px" }} spacing={3}>
                <Box>
                    <Typography className={styles.heading}>Country of Origin</Typography>
                    <Typography className={styles.subheading}>
                                <IonIcon icon={ellipse} style={{ width: "4px" }}></IonIcon>
                                INDIA
                            </Typography>
                </Box>
                <Box>
                    <Typography className={styles.heading} >Features and Benefits</Typography>
                    {
                        specArray.map((item, index) => (
                            <Typography key={index} className={styles.subheading}>
                                <IonIcon icon={ellipse} style={{ width: "4px" }}></IonIcon>
                                {item.title}{item.body}
                            </Typography>
                        ))
                    }
                </Box>
            </Stack>
        </Stack>
    )
}

export default Specification;
