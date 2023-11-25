"use client"
import { Stack, Grid } from '@mui/material';
import React from 'react';
import Filter from '../../Filter/Filter';

const FilterAndSort = () => {
  return (
    <Stack>
        <Filter filterArray={filterArray} sort={true} />
    </Stack>
  )
}

const filterArray=[
    {
        title:"Filter"
    },
    
]

export default FilterAndSort;