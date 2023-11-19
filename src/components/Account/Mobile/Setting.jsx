'use client'
import { IonIcon } from '@ionic/react';
import { Typography, Stack } from '@mui/material'
import { layersOutline } from 'ionicons/icons';
import React from 'react';


const Setting = () => {
  return (
    <Stack gap={5} sx={{width:'100%'}}>
      <Stack gap={0.7}>
        <Typography sx={{fontWeight:'600', fontSize:'20px', marginBottom:'10px'}}>Notification Settings</Typography>
        <Option title="Alerts"/>
        <Option title="Notification"/>
      </Stack>

      <Stack gap={0.7}>
        <Typography sx={{fontWeight:'600', fontSize:'20px', marginBottom:'10px'}}>App Version</Typography>
        <Option title="Version 1.0.0"/>
      </Stack>
    </Stack>
  )
}

export default Setting



const Option=({title})=>{
    return(
        <Stack gap={2} direction={"row"} sx={{position:'relative', padding:'15px', backgroundColor:'#fff', borderRadius:'5px', alignItems:'center'}}>
            <IonIcon style={{fontSize:'25px'}} icon={layersOutline}/>
            <Typography sx={{fontSize:'18px'}}>{title}</Typography>
        </Stack>
    )
}