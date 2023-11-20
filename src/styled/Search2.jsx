import React from 'react'
import styles from './search.module.css';
import { SearchBlack, Funnel } from '@/assets/svg/index';
import Image from 'next/image';
import { Typography } from '@mui/material';

export const Search = ({width}) => {
    return (
        <div className={styles.search2} style={{width:width?width:"150px", height:"40px"}}>
            <input type='text' placeholder='Search' className={styles.searchinput}></input>
            <Image alt="search" src={SearchBlack} className={styles.searchicon} />
        </div>
    )
}


export const FilterBox=({width})=>{
    return(
        <div className={styles.search2} style={{width:width?width:"150px", height:"40px"}}>
            <Typography>Filter</Typography>
            <Image alt="filter" src={Funnel} className={styles.searchicon} />
        </div>
    )
}

