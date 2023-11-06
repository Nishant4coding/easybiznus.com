import { Stack, Typography } from '@mui/material';
import styles from './wallet.module.css';
import TransactionTable from './TransactionTable';
import BillCard from './BillCard';

const Transaction = () => {
  return (
    <Stack className={styles.container}>
      <Typography className={styles.heading}>Wallet Transactions</Typography>
      <Stack sx={{ width: '100%', justifyContent: 'space-between' }} direction={"row"}>
        <TransactionTable />
        <BillCard />
      </Stack>
    </Stack>
  )
}

export default Transaction
