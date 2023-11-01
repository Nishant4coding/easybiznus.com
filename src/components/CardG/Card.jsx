import { Button, Stack, Typography, TextField } from "@mui/material";
import styles from './card.module.css';
import Image from "next/image";
import { Shoe3 } from "@/assets/svg/index";
import { IonIcon } from "@ionic/react";
import { documentTextOutline, star } from "ionicons/icons";

const Card = ({ data }) => {
    const{title, color, size, seller, price, date}=data;
    return (
        <Stack className={styles.card} direction="row">
            <Image src={Shoe3} width={160} />
            <Stack style={{ paddingLeft: "15px", width: "190px" }}>
                <Typography className={styles.title}>{title}</Typography>
                <Stack style={{ marginBottom: "2px" }}>
                    <Typography className={styles.color}>Color: {color} Size: {size}</Typography>
                    <Typography className={styles.color}>Seller: {seller}</Typography>
                </Stack>
                <Typography className={styles.title}>{price}</Typography>
            </Stack>

            <Stack style={{ marginLeft: "50px", marginLeft: '140px',alignItems:'flex-end' }} gap={2}>
                <Stack gap={1}>
                    <Button variant="contained" className={styles.button1}>BUY</Button>
                    <Button variant="outlined" className={styles.button}>NOT LIKED</Button>
                </Stack>
                <Stack direction={"row"} gap={1} style={{alignItems:'flex-end'}}>
                    <Typography style={{fontSize:'11px'}}>Trial on</Typography>
                    <Typography style={{fontSize:'14px'}}>{date}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Card;

const input = {
    '& label.Mui-focused': {
        color: '#A0AAB4',
        marginTop: "40px",
    },
    '& .MuiInput-underline:after': {
        border: "none"
    },
    '& .MuiOutlinedInput-root': {
        border: "none",
        outline: "none",
        borderRadius: "5px",
        width: "350px",
        marginTop: "30px",
        backgroundColor: "#EEEEEE",
        '& fieldset': {
            border: "none",
        },
        '&:hover fieldset': {
            border: "none",
        },
        '&.Mui-focused fieldset': {
            border: "none",
        },
    },
    '& label': {
        marginTop: "20px",
    }
}