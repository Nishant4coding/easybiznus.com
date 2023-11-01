import { Button } from '@mui/material'
import styles from './try.module.css';

const BasicButton = () => {
    return (
        <Button variant='contained' className={styles.button}>
            BOOK TRIAL
        </Button>
    )
}

export default BasicButton
