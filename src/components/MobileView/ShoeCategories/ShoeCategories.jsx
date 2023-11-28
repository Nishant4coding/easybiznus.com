"use client"
import { Stack, Typography, Grid } from '@mui/material';
import React from 'react';
import CardC from '@/components/MobileViewCards/CardC/CardC';

const ShoeCategories = () => {
    return (
        <Stack >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={2} >
                {
                    cardData?.map((item, index) => {
                        return (
                            <Grid item key={index}  >
                                <CardC key={index} title={item?.title} cardStyle={item?.cardStyle} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Stack>
    )
};

const cardData = [
    {
        title: "Sports",
        cardStyle: {
            bgColor: "linear-gradient(to right bottom, #3D73EB, #DE8FFF)"
        }
    },
    {
        title: "Casuals",
        cardStyle: {
            bgColor: "linear-gradient(to right bottom, #F5FFA6, #F5B080)"
        }
    },
    {
        title: "Formals",
        cardStyle: {
            bgColor: "linear-gradient(to left bottom,  #40FFC7, #0538FF)"
        }
    },
    {
        title: "Kids",
        cardStyle: {
            bgColor: "linear-gradient(to right bottom, #FAD0C4, #FBC2EB)"
        }
    },

]

export default ShoeCategories;