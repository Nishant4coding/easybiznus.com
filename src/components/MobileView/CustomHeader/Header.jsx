import { IonIcon } from '@ionic/react'
import { Stack, Typography } from '@mui/material'
import { arrowBackOutline } from 'ionicons/icons'
import { useRouter } from 'next/navigation';

const Header = ({ title, count }) => {
    const router = useRouter();
    return (
        <Stack sx={{ width: '100%', padding:'10px', alignItems:'center', backgroundColor:'#0D1A26', }} direction={"row"} gap={1}>
            <IonIcon icon={arrowBackOutline} style={{color:'#fff', fontSize:'20px', marginRight:'10px'}} onClick={()=>router.back()}/>
            <Typography sx={{color:"#fff", fontWeight:'600', fontSize:'20px'}}>{title}</Typography>
            <Typography sx={{color:"#fff", fontWeight:'600', fontSize:'20px'}}>[{count}]</Typography>
        </Stack>
    )
}

export default Header
