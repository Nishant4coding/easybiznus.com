import Image from 'next/image';
import { Search } from '@/assets/svg/index';
import styles from './mobileNav.module.css';
import {Box} from '@mui/material';

const MobileNavSearch = ({search,setSearch,searchIcon, setSearchIcon}) => {
    return (
        <Box className={[styles.search, search?styles.searchFocus:'']} onClick={()=>setSearch(!search)}>
            <Image src={Search} alt={"search"} style={{cursor:"pointer", position:'absolute', left:'10px'}} width={15} onClick={()=>setSearchIcon(!searchIcon)}/>
            <input placeholder="SEARCH" className={styles.searchInput}></input>
        </Box>
    )
}

export default MobileNavSearch;