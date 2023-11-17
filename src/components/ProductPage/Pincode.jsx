"use client"
import { Box, Stack, Typography, TextField } from "@mui/material";
import styles from './product.module.css';
import { closeCircleOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Pincode = ({ btnwidth }) => {
    return (
        <Box sx={{ width: "100%", }}>
            <Typography sx={{ fontWeight: "700", fontSize: "13px", marginBottom: "15px" }}>Please enter the PIN code to check the delivery time</Typography>
            <Stack direction={"row"} sx={{ justifyContent: "space-between", width: "100%", }} gap={1.5}>
                <Stack direction="row" sx={btnwidth ? { position: "relative", width: btnwidth } : { position: "relative", width: "70%" }}>
                    <TextField id="outlined-basic"
                        InputProps={{
                            inputProps: {
                                maxLength: 6,
                            },
                        }} label="PIN code" variant="outlined" className={styles.qtyinput} sx={input} style={{ width: '100%' }}></TextField>
                    <IonIcon icon={closeCircleOutline} size={"medium"} style={{ position: "absolute", top: "32%", right: "10px", cursor: "pointer" }}></IonIcon>
                </Stack>
                <Box className={styles.button} style={btnwidth ? { width: btnwidth } : { width: "100px" }}>
                    CHECK
                </Box>
            </Stack>
        </Box>
    )
}

export default Pincode;

const input = {
    '& label.Mui-focused': {
        color: '#0D1A26',
        fontWeight: "700",
        marginTop: "0px",
        fontSize: "12px"
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        height: "45px",
        '& fieldset': {
            border: '1px solid #0D1A26',
            borderRadius: "10px",
        },
        '&:hover fieldset': {
            borderColor: '#0D1A26',
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #0D1A26',
            borderRadius: "10px",
        },
    },
    '& label': {
        marginTop: "-4px",
        color: '#0D1A26',
        fontSize: "13px"
    }
};
