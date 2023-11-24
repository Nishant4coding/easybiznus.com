import React from 'react';
import { Stack, Button } from '@mui/material';
import styles from './button.module.css';
import { useRouter } from 'next/navigation'


const CustomButton = ({ name, link }) => {
    const router = useRouter();
    return (
            <Stack alignItems={"center"}>
                <Button className={styles.btn} onClick={() => router.push(`${link}`)}>{name}</Button>
            </Stack>
    )
}

export default CustomButton;
