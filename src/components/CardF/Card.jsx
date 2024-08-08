import { Button, Stack, Typography, TextField } from "@mui/material";
import styles from './card.module.css';
import Image from "next/image";
import { Shoe3 } from "@/assets/svg/index";
import { IonIcon } from "@ionic/react";
import { documentTextOutline, star } from "ionicons/icons";

const Card = ({refundable, action,data}) => {

    console.log(data)
    return (
        <Stack className={styles.card} direction="row">
            <Image src={Shoe3} alt={"product"} width={160} />
            <Stack style={{ paddingLeft: "15px", width: "190px" }}>
                <Typography className={styles.title}>Nike Kiger 9</Typography>
                <Stack style={{ marginBottom: "10px" }}>
                    <Typography className={styles.color}>Color: Orange</Typography>
                    <Typography className={styles.color}>Size: 9</Typography>
                    <Typography className={styles.color}>Seller: REDTAPELIMITED</Typography>
                </Stack>
                <Typography className={styles.title}>₹ 12,795</Typography>
                {refundable&&<Typography className={styles.title} style={{textWrap:'nowrap', fontSize:'20px', color:'#F55E53'}}>Refundable {refundable}</Typography>}
            </Stack>

            {action&&
            <Stack style={{ marginLeft: "60px" }} gap={0}>
                <Typography className={styles.title} style={{ fontSize: "16px", fontWeight: "600", marginBottom: "3px" }}>More actions</Typography>
                <Typography className={styles.iconTypo}>
                    <IonIcon icon={documentTextOutline}></IonIcon>
                    Download Invoice
                </Typography>
                <Button variant="outlined" className={styles.button}>
                    Download
                </Button>
            </Stack>
            }
            <Stack style={{ marginLeft: "50px" }}>
                <Typography className={styles.iconTypo}>
                    <IonIcon icon={star}></IonIcon>
                    Rate & Review Product
                </Typography>
                <Typography className={styles.iconTypo} style={{gap:"10px", marginTop:"7px"}}>
                    {
                        starArray.map((item)=>( 
                            <IonIcon key={item} icon={star} style={{fontSize:"28px", color:"#BBBBBB"}}></IonIcon>
                        ))
                    }
                </Typography>
                <TextField
                    label="Description"
                    multiline
                    rows={4}
                    sx={input}
                />
            </Stack>
        </Stack>
    )
}

export default Card;

const input = {
    '& label.Mui-focused': {
        color: '#A0AAB4',
        marginTop:"40px",
    },
    '& .MuiInput-underline:after': {
        border:"none"
    },
    '& .MuiOutlinedInput-root': {
        border:"none",
        outline:"none",
        borderRadius:"5px",
        width:"350px",
        marginTop:"30px",
        backgroundColor:"#EEEEEE",
        '& fieldset': {
            border:"none",
        },
        '&:hover fieldset': {
            border:"none",
        },
        '&.Mui-focused fieldset': {
            border:"none",
        },
    },
    '& label': {
        marginTop:"20px",
    }
};

const starArray=[1,2,3,4,5];