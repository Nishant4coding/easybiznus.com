import { Stack, Typography } from "@mui/material";

const Adress = ()=>{
    return(
        <Stack style={{width:'100%'}}>
            <Typography style={{ fontSize: '22px', margin: '20px 0 10px 0 ' }}>Delivery Address</Typography>
            <Typography style={{ fontSize: '16px', margin: '0px 0 10px 0', fontWeight:600 }}>Ratan Singh</Typography>
            <Typography style={{ fontSize: '14px', fontWeight:500 }}>1021</Typography>
            <Typography style={{ fontSize: '14px', fontWeight:500 }}>Verona, Mahagun Mascot</Typography>
            <Typography style={{ fontSize: '14px', fontWeight:500 }}>Crossing Republik, Ghaziabad, 201016</Typography>
            <Typography style={{ fontSize: '14px', fontWeight:500 }}>INDIA</Typography>
            <Typography style={{ fontSize: '14px', fontWeight:600, display:'flex', gap:'8px'}}>Phone number
            <Typography style={{ fontSize: '14px', fontWeight:500 }}>6398896641</Typography>
            </Typography>
        </Stack>
    )
}

export default Adress;