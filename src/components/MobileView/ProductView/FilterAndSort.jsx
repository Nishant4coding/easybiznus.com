"use client"
import { Stack, Grid } from '@mui/material';
import React from 'react';
import Filter from '../../Filter/Filter';

import CardB from '../../MobileViewCards/CardB/CardB';
import { Shoe1 } from '@/assets/svg/index';

const FilterAndSort = () => {
  return (
    <Stack>
        <Filter filterArray={filterArray} sort={true} />
        <Grid container  rowSpacing={1} spacing={2} justifyContent={"center"} marginTop={2} >
            {
                cardArray.map((item, index) => (
                    <Grid item  key={index} >
                        <CardB data={item} />
                    </Grid>
                ))
            }
        </Grid>
    </Stack>
  )
}

const filterArray=[
    {
        title:"Filter"
    },
    
]

const cardArray = [
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
  {
      discount: '-20%',
      image: Shoe1,
      title: 'PAPARIKA',
      style: 'ZOOMSTER 350',
      sp: '₹15,990',
      mrp: '₹3,499',
      link: '/product'
  },
];


export default FilterAndSort;