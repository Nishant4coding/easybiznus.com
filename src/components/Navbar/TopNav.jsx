'use client';
import React, { useState } from 'react'
import Navbar from '@/components/Navbar/Navbar';
import SearchPop from './SearchPop';

const TopNav = () => {
    const [searchPop, setSearchPop] = useState(false);
    const [search, setSearch] = useState(false);

    const handleCloseSearch = () => {
        setSearchPop(false);
        setSearch(false);
    }
    const handleOpenSearch = () => {
        setSearchPop(true);
        setSearch(true);
    }


    return (
        <>
            <Navbar search={search} handleOpenSearch={handleOpenSearch} />
            <SearchPop handleOpenSearch={handleOpenSearch} search={search} searchPop={searchPop} handleCloseSearch={handleCloseSearch} />
        </>
    )
}

export default TopNav
