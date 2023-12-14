"use client";
import { Button, Stack, Typography } from '@mui/material';
import styles from './account.module.css';
import { IonIcon } from '@ionic/react';
import global from '@/global.module.css';
import { chevronDownOutline } from 'ionicons/icons';

const NewAccount = ({setForm}) => {
  return (
    <Stack sx={{ width: '80%', alignItems: 'center' }}>
      <Stack sx={{ width: '100%', marginBottom: '160px' }} gap={5}>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input title={"First Name"} placeholder={"First Name"} />
          <Input title={"Last Name"} placeholder={"Last Name"} />
        </Stack>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input title={"Email"} placeholder={"Email"} />
          <Input title={"Date of Birth"} placeholder={"DD/MM/YYYY"} />
        </Stack>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input title={"Password"} placeholder={"**********"} />
          <Input title={"Phone Number"} placeholder={"+"} />
        </Stack>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input title={"Address Line 1 *"} placeholder={"Address Line 1"} width={"82%"} />
        </Stack>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input title={"Address Line 2*"} placeholder={"Address Line 2"} width={"82%"} />
        </Stack>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer}>
          <Input title={"Country"} placeholder={"Select Country"} >
          <IonIcon icon={chevronDownOutline} className={styles.downArrow}></IonIcon>
          </Input>
          <Input title={"State *"} placeholder={"Select State"} >
          <IonIcon icon={chevronDownOutline} className={styles.downArrow}></IonIcon>
          </Input>
        </Stack>
        <Stack direction={"row"} gap={2} className={styles.inputcontainer} sx={{alignItems:'flex-end'}}>
          <Input title={"City *"} placeholder={"Select City"} >
            <IonIcon icon={chevronDownOutline} className={styles.downArrow}></IonIcon>
          </Input>
          <Input title={"PIN CODE *"} placeholder={"State"} fsize={"15px"}>
            <IonIcon icon={chevronDownOutline} className={styles.downArrow}></IonIcon>
          </Input>
        </Stack>
      </Stack>
      <Button variant='contained'className={global.button}
      onClick={()=>setForm(false)}
      style={{padding:'10px 50px', fontSize:'13px'}}
      >
        SAVE
      </Button>
    </Stack>
  )
}

export default NewAccount;

const Input = ({ title, placeholder, width, children, fsize }) => {
  return (
    <Stack gap={1} sx={{ width: width ? width : '40%', position:'relative'}}>
      <Typography style={{fontSize:fsize?fsize:""}} className={styles.inputhead}>{title}</Typography>
      <input type="text" placeholder={placeholder} className={styles.input}></input>
      {children}
    </Stack>
  )
}