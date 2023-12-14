"use client"
import { Stack, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { CrossIcon, PinBlack } from '@/assets/svg/index';
import styles from './cart.module.css';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import AddressForm from './AddressForm';
import GoogleMapReact from 'google-map-react';
import { IonIcon } from '@ionic/react';
import { caretForwardOutline, caretForward, locationSharp, locationOutline, add, addOutline } from 'ionicons/icons';
import LngLat from './LngLat';

const AddressSelection = ({setAddress}) => {
    const [openModal, setOpenModal] = useState(false);
    const [showAddForm, setShowAddForm] = useState(true);
    const [theme, setTheme] = useState(false);
    const [theme1, setTheme1] = useState(true);
    const router = useRouter();

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    const handledAdd = () => {
        setTheme(!theme);
    }

    return (
        <Stack sx={{ marginTop: "55px" }}>

            {/* Map section AIzaSyDAhvUF6YrOCT87YUKOchKTO-7-ZYaJnho */}

            <Stack sx={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDAhvUF6YrOCT87YUKOchKTO-7-ZYaJnho" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <LngLat
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </Stack>

            {openModal && <Box sx={{ position: "fixed", bottom: "10px", alignSelf: "center", width: "100vw", }} >
                <Stack paddingX={2} direction={"row"} justifyContent={"space-between"} alignItems={"center"} paddingY={1}>
                    <Typography sx={{ fontSize: "15px", fontWeight: "600px" }}>{"Select Delivery Location"}</Typography>
                    <Image src={CrossIcon} alt='cross icon' onClick={() => setOpenModal(false)} />
                </Stack>
                <Box marginBottom={3}>

                    <Stack
                        boxShadow={1}
                        marginY={"5px"}
                        paddingX={2}
                        paddingY={1}
                        className={styles.modalCon}
                        style={{ backgroundColor: theme ? "#0D1A26" : "", color: theme ? "white" : "#0D1A26" }}
                    >

                        <Stack direction={"row"} gap={2} onClick={() => handledAdd()} >
                            <IonIcon
                                icon={theme ? locationOutline : locationSharp} size="large"
                                style={{ backgroundColor: theme ? "#0D1A26" : "", color: theme ? "white" : "#0D1A26", cursor: "pointer" }}
                            ></IonIcon>
                            <Stack >
                                <Typography fontSize={"16px"}>{data?.title}</Typography>
                                <Typography fontSize={"9px"} sx={{ cursor: "pointer" }}>{data?.address}</Typography>
                            </Stack>
                        </Stack>
                        <IonIcon
                            icon={theme ? caretForward : caretForwardOutline}
                            size="large"
                            style={{ color: theme ? "white" : "#0D1A26", cursor: "pointer", width: "15px", height: "15px" }}
                            onClick={() => {
                                setTheme(!theme);
                            }}
                        ></IonIcon>
                    </Stack>

                    <Stack
                        boxShadow={1}
                        marginY={"5px"}
                        paddingX={2}
                        paddingY={1}
                        className={styles.modalCon}
                        style={{ backgroundColor: theme1 ? "#0D1A26" : "", color: theme1 ? "white" : "#0D1A26" }}>
                        <Stack direction={"row"} gap={2} onClick={() => router.push("/checkout")}>
                            <IonIcon
                                icon={theme1 ? addOutline : add}
                                size="large"
                                style={{ backgroundColor: theme1 ? "#0D1A26" : "", color: theme1 ? "white" : "#0D1A26", cursor: "pointer" }}

                            ></IonIcon>
                            <Typography alignSelf={"center"} fontSize={"16px"}> {"Confirm Location"}</Typography>
                        </Stack>
                        <IonIcon
                            icon={theme1 ? caretForward : caretForwardOutline}
                            size="large"
                            style={{ color: theme1 ? "white" : "#0D1A26", cursor: "pointer", width: "15px", height: "15px" }}
                            onClick={() => {
                                setTheme1(!theme1);
                            }}
                        ></IonIcon>
                    </Stack>
                </Box>
            </Box>}

            {showAddForm && <AddressForm setAddress={setAddress} openModal={openModal} setOpenModal={setOpenModal} />}
            {!openModal || !showAddForm && <Button sx={{ position: "fixed", bottom: "10px", alignSelf: "center" }} onClick={() => setOpenModal(true)}>Select Address </Button>}
        </Stack>
    )
}

const data =
{
    title: "Pandara Park",
    icon: PinBlack,
    address: "1067, Verona Mahagun Delhi (201501)",
};



export default AddressSelection;