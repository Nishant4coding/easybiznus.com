import React from 'react';
import { Stack, Button } from '@mui/material';
import styles from './button.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


const CustomButton = ({ name, link }) => {
    const router = useRouter()
    return (
        // <Link href={link}>
            <Stack alignItems={"center"}>
                <Button className={styles.btn} onClick={() => router.push(`${link}`)}>{name}</Button>
            </Stack>
        // </Link>
    )
}

export default CustomButton;
