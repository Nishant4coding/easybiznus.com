"use client"
import { Box } from '@mui/material';
import Image from 'next/image';
import { Logo } from '@/assets/svg/index';
import styles from './nav.module.css';
import Navlink from './Navlink';
import Search from './Search';
import NavIcon from './NavIcon';
import Location from './Location';
import { useState } from 'react';
import Link from 'next/link';
import UserMenu from './UserMenu';

const Navbar = () => {
    const [search, setSearch] = useState(false);
    const [userMenu, setUserMenu ] = useState(false);
    const handleClose = ()=>setUserMenu(false);
    const handleOpen = ()=>setUserMenu(true);

    return (
        <Box className={styles.navbar}>
            <Link href="/">
                <Image src={Logo} alt={"logo"} width={120} />
            </Link>
            <Location />
            <Navlink search={search} />
            <Search search={search} setSearch={setSearch} />
            <NavIcon handleClose={handleClose} userMenu={userMenu} handleOpen={handleOpen}/>
            <UserMenu userMenu={userMenu} handleClose={handleClose}/>
        </Box>
    )
}

export default Navbar;

