import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import styles from './nav.module.css';

const Navlink = ({search}) => {
    return (
        <>
            <Stack direction="row" spacing={4} className={[styles.navlink, search?styles.navlinkfocus:""]}>
                {
                    navArray.map((link, index) => (
                        <Link key={index} href={link.path} className={styles.link}>{link.title}</Link>
                    ))
                }
            </Stack>
        </>
    )
}

export default Navlink;

const navArray = [
    {
        title: "New & Trending",
        path: "#"
    },
    {
        title: "Women",
        path: "#"
    },
    {
        title: "Men",
        path: "#"
    },
    {
        title: "Kids",
        path: "#"
    },
    {
        title: "Sports",
        path: "#"
    },
    // {
    //     title: "Offers",
    //     path: "#"
    // }
]