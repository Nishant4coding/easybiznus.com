import { Stack, Typography, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import styles from '../try.module.css';
import { Shoe6 } from '@/assets/svg';
import { Card } from './Header';
import global from '@/global.module.css';

const overlayStyle = {
    // backdropFilter: "blur(9px)",
    backgroundColor: "rgba(13, 26, 38, 0.41)",
};


const Popup = ({ open, handleClose }) => {


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                "& .MuiBackdrop-root": overlayStyle,
                display: "flex",
                alignItems: "flex-end"
            }}
        >
            <Stack className={styles.popup}>
                <Stack gap={1.3} sx={{ borderBottom: '2px solid #ECE6F0', padding: '15px 0' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Confirm Order</Typography>
                    {
                        cardArray.map((item, index) => (
                            <Card key={index} data={item} icon={false} />
                        ))
                    }
                </Stack>
                <Stack direction={"row"} sx={{ margin: '20px auto', width: '90%',}}>
                    <Stack gap={1} sx={{ width: '70%', }}>
                        <Typography className={global.subheadingMobile}>Order Total</Typography>
                        <Typography className={global.subheadingMobile}>Time Slot:</Typography>
                        <Typography className={global.subheadingMobile}>Current Fees
                        <Typography sx={{fontSize:'10px', width:'50%',}}>Fees will be charged if you don’t buy the product</Typography>
                        </Typography>
                    </Stack>
                    <Stack gap={1} sx={{ width: '35%' }}>
                        <Typography className={global.subheadingMobile}>₹ 0.00</Typography>
                        <Typography className={global.subheadingMobile}>2-june 2 pm</Typography>
                        <Typography className={global.subheadingMobile}>₹ 100.00</Typography>
                    </Stack>
                </Stack>

                <Button className={global.button} style={{fontSize:'12px', margin:'20px 0'}}>
                    Place Order
                </Button>
            </Stack>
        </Modal>
    )
}

export default Popup;


const cardArray = [
    {
        image: Shoe6,
        title: 'Mercedes AMG Petronas F1, Wired Run Unisex Sneakers',
        category: 'Men’s Shoes',
        subcategory: 'Puma White-Silver',
        size: '11',
        price: '₹3,499'
    },
    {
        image: Shoe6,
        title: 'Mercedes AMG Petronas F1, Wired Run Unisex Sneakers',
        category: 'Men’s Shoes',
        subcategory: 'Puma White-Silver',
        size: '11',
        price: '₹3,499'
    },
    {
        image: Shoe6,
        title: 'Mercedes AMG Petronas F1, Wired Run Unisex Sneakers',
        category: 'Men’s Shoes',
        subcategory: 'Puma White-Silver',
        size: '11',
        price: '₹3,499'
    },
]
