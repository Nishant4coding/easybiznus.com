import { IonIcon } from '@ionic/react';
import { Button, Stack, Typography } from '@mui/material';
import { arrowBack, caretForwardOutline, micOutline, radioButtonOffOutline, radioButtonOnOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import global from '@/global.module.css'

const SlotBooking = ({ closeSlotBooking }) => {
    const [address, setAddress] = useState(false);
    const [selectAddress, setSelectAddress] = useState(0);

    return (
        <Stack sx={{ width: '100%' }}>
            {address ?
                <></> :
                <Stack gap={7} sx={{width:'100%'}}>
                    <Stack direction={"row"} sx={{ alignItems: 'center' }} gap={1}>
                        <IonIcon icon={arrowBack} style={{ fontSize: '20px' }} onClick={closeSlotBooking} />
                        <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Confirm Details</Typography>
                    </Stack>

                    <Stack gap={1}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Select Slot</Typography>
                        <Stack gap={1} direction={"row"} sx={{ flexWrap: 'wrap' }}>
                            {
                                [1, 2, 3, 4].map((item) => (
                                    <SlotCard key={item} />
                                ))
                            }
                        </Stack>
                    </Stack>

                    <Stack gap={1.3}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Select Address</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>+ Add a new address</Typography>
                        {
                            addressArray.map((item, index) => (
                                <AddressCard index={index} key={index} data={item} selected={index === selectAddress ? true : false} setSelectAddress={setSelectAddress} />
                            ))
                        }
                    </Stack>

                    <Stack gap={1.3}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Audio Instructions</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>+ Add a Voice Note</Typography>
                        <VoiceCard />
                    </Stack>

                    <Stack sx={{ alignItems: 'center', marginTop:"30px", width:'100%' }}>
                        <Button variant="contained" className={global.button} style={{width:'80%'}}>
                            CONTINUE
                        </Button>
                    </Stack>
                </Stack>
            }
        </Stack>
    )
}

export default SlotBooking;

const SlotCard = () => {
    return (
        <Stack sx={{ flexShrink: 0, width: 'fit-content', alignItems: 'center', border: '1px solid #B5B5B5', borderRadius: '5px', padding: '5px 10px' }}>
            <Typography sx={{ fontSize: '14px' }}>12-June-2023</Typography>
            <Typography sx={{ fontSize: '12px', opacity: "0.5" }}>6 pm - 8 pm </Typography>
        </Stack>
    )
}

const AddressCard = ({ index, setSelectAddress, selected, data }) => {
    const { title, value } = data;
    console.log(data);
    return (
        <Stack onClick={() => setSelectAddress(index)} gap={2} direction={"row"} sx={{ alignItems: 'center', borderRadius: '8px', border: '1px solid #AEAEAE', padding: '10px' }}>
            {
                selected ?
                    <IonIcon icon={radioButtonOnOutline} style={{ fontSize: '20px' }} /> :
                    <IonIcon icon={radioButtonOffOutline} style={{ fontSize: '20px' }} />
            }
            <Stack sx={{ width: '50%' }}>
                <Typography sx={{ fontSize: '15px' }}>{title}</Typography>
                <Typography sx={{ fontSize: '12px', opacity: '0.8' }}>{value}</Typography>
            </Stack>
            {/* <IonIcon icon={}/> */}
        </Stack>
    )
}

const addressArray = [
    {
        title: "Harsh Tyagi",
        value: "634,Mahatma Gandhi Road, Fort, Mumbai,400037"
    },
    {
        title: "Harsh Tyagi",
        value: "634,Mahatma Gandhi Road, Fort, Mumbai,400037"
    },
]


const VoiceCard = () => {
    return (
        <Stack gap={2} direction={"row"} sx={{ position: 'relative', alignItems: 'center', borderRadius: '8px', border: '1px solid #AEAEAE', padding: '10px' }}>
            <IonIcon icon={micOutline} style={{ fontSize: '25px' }} />
            <Typography sx={{ fontSize: '15px' }}>Bring Big size also</Typography>
            <IonIcon icon={caretForwardOutline} style={{ position: 'absolute', right: '15px' }} />
        </Stack>
    )
}