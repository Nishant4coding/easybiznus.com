'use client'
import { IonIcon } from '@ionic/react';
import { Typography, Stack, Box } from '@mui/material'
import { layersOutline } from 'ionicons/icons';
import React from 'react';
import { StyledSwitch } from '@/styled/Switch';

const Setting = () => {
  return (
    <Stack gap={5} sx={{ width: '100%' }}>
      <Stack gap={0.7}>
        <Typography sx={{ fontWeight: '600', fontSize: '20px', marginBottom: '10px' }}>Notification Settings</Typography>
        <Option title="Alerts" sw={true}/>
        <Option title="Notification" sw={true}/>
      </Stack>

      <Stack gap={0.7}>
        <Typography sx={{ fontWeight: '600', fontSize: '20px', marginBottom: '10px' }}>App Version</Typography>
        <Option title="Version 1.0.0" />
      </Stack>
    </Stack>
  )
}

export default Setting



const Option = ({ title, sw }) => {
  return (
    <Stack gap={2} direction={"row"} sx={{ position: 'relative', padding: '15px', backgroundColor: '#fff', borderRadius: '5px', alignItems: 'center' }}>
      <IonIcon style={{ fontSize: '25px' }} icon={layersOutline} />
      <Typography sx={{ fontSize: '18px' }}>{title}</Typography>
      {sw&&
        <Box sx={{ width: 'auto', height: 'auto', position: 'absolute', right: '20px' }}>
          <StyledSwitch />
        </Box>
      }
    </Stack>
  )
}