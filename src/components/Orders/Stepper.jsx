import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import styles from './order.module.css'

const steps = [
    {
        label: 'Order Confirmed',
        description: `The Order has been successfully confirmed by our system`,
        date: `Nov 14, 10:25`,
        active: true,
    },
    {
        label: 'Dispatched',
        description: `All items from your order were picked and Dispatched`,
        date: `Nov 14, 12:25`,
        active: true,
    },
    {
        label: 'Out for Delivery',
        description: `Our Courier is coming to your address`,
        date: `Nov 15, 04:25`,
        active: true,
    },
    {
        label: 'On the Way',
        date: `Estimate delivery by Nov 17`,
        active: false,
    },
];

const VerticalLinearStepper =()=> {

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Typography style={{ fontSize: '22px', margin: '20px 0' }}>Track Details</Typography>
            <Stepper data={steps} />
        </Box>
    );
};

export default VerticalLinearStepper;

const Stepper = ({ data }) => {
    let length = data.length;

    return (
        <Stack direction="column">
            {
                data.map((item, index) => (
                    <Stack key={index} direction={"row"} style={{ height: 'auto' }} gap={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position:'relative',width:'30px',}}>
                            {
                            <Box className={[item.active?styles.activeStepperConnector:styles.inactiveStepperConnector]} style={{opacity:`${index===0?0:1}`}}></Box>
                            }
                            <Box className={[styles.stepperIcon, item.active?styles.stepperActiveBg:styles.stepperInactiveIcon]}>
                                <CheckOutlinedIcon style={{ color: '#444444', fontSize: '16px', fontWeight: "900" }} />
                            </Box>
                            {length!==index+1&&<Box className={[item.active?styles.activeStepperConnector:styles.inactiveStepperConnector]}></Box>}
                        </Box>
                        <Stack style={{ padding: "10px 0px"}}>
                            <Typography style={{ fontWeight: 500, fontSize:'16px' }}>{item.label}</Typography>
                            <Typography style={{ fontSize: '12px', color: '#444444' }}>{item.description}</Typography>
                            <Typography style={{ fontSize: '13px', }}>{item.date}</Typography>
                        </Stack>
                    </Stack>
                ))
            }
        </Stack>
    )
}

