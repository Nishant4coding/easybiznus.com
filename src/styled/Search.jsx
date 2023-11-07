import React from 'react'
import styles from './search.module.css';
import { SearchBlack } from '@/assets/svg/index';
import Image from 'next/image';

const Search = ({width}) => {
    return (
        <div className={styles.search} style={{width:width?width:"150px", height:"40px"}}>
            <input type='text' placeholder='Search' className={styles.searchinput}></input>
            <Image alt="search" src={SearchBlack} className={styles.searchicon} />
        </div>
    )
}

export default Search;

