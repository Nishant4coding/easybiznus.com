import React from 'react';
import { Stack, Typography, Grid } from '@mui/material';

function CardC({title, cardStyle}) {
    return (
        <Stack width={"40vw"} height={"30vh"} borderRadius={1} alignItems={"center"} justifyContent={"center"} color={"white"} sx={{ background: cardStyle.bgColor }}>
            <Typography sx={{ fontSize: 28, fontWeight: 700 }} > {title}</Typography>
        </Stack>
    )
}

export default CardC