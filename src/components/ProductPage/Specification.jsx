'use client'
import { Box, Stack, Typography } from "@mui/material";
import styles from './product.module.css';
import { ellipse } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Specification = () => {
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
                    <Typography className={styles.heading}>Manufacturer's Address</Typography>
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

const specArray = [
    {
        title: 'Material Type :',
        body: ''
    },
    {
        title: 'Shoe Width',
        body: ''
    },
    {
        title: 'Mess Upper',
        body: ''
    },
    {
        title: 'Rubber Midsole',
        body: ''
    },
    {
        title: 'Rubber',
        body: ''
    }
]