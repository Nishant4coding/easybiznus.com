import Image from 'next/image';
import { Search } from '@/assets/svg/index';
import styles from './nav.module.css';
import { Box } from '@mui/material';

const SearchBtn = ({ search, handleOpenSearch }) => {
    return (
        <Box className={[styles.search, search ? styles.searchFocus : '']} onClick={handleOpenSearch}>
            <Image src={Search} alt={"search"} style={{ cursor: "pointer", position: 'absolute', left: '10px' }} width={25} />
            <input placeholder="SEARCH" className={styles.searchInput}></input>
        </Box>
    )
}

export default SearchBtn;