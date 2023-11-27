"use client"
import { Stack, Typography } from '@mui/material';
import React from 'react'

const ShoeCategories = () => {
    return (
        <Stack alignItems={"center"} >
            <Stack marginTop={3} gap={1} >
                <Stack direction={"row"} gap={1}>
                    <Stack width={166} height={166} borderRadius={1} alignItems={"center"} justifyContent={"center"} color={"white"} sx={{ background: 'linear-gradient(to right bottom, #3D73EB, #DE8FFF)' }}>
                        <Typography sx={{ fontSize: 28, fontWeight: 700 }} > Sports</Typography>
                    </Stack>
                    <Stack width={166} height={166} alignItems={"center"} justifyContent={"center"} color={"white"} sx={{ background: 'linear-gradient(to right bottom, #F5FFA6, #F5B080)' }}>
                        <Typography sx={{ fontSize: 28, fontWeight: 700 }}> Casuals</Typography>
                    </Stack>
                </Stack>
                <Stack direction={"row"} gap={1}>
                    <Stack width={166} height={166} borderRadius={1} alignItems={"center"} color={"white"} justifyContent={"center"} sx={{ background: 'linear-gradient(to left bottom,  #40FFC7, #0538FF)' }}>
                        <Typography sx={{ fontSize: 28, fontWeight: 700 }} > Formals</Typography>
                    </Stack>
                    <Stack width={166} height={166} borderRadius={1} alignItems={"center"} color={"white"} justifyContent={"center"} sx={{ background: 'linear-gradient(to right bottom, #FAD0C4, #FBC2EB)' }}>
                        <Typography sx={{ fontSize: 28, fontWeight: 700 }}> Kids</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ShoeCategories;