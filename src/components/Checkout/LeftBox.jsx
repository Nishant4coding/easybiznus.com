"use client"
import React, { useEffect } from 'react'
import { Stack, Typography } from '@mui/material';
import Address from './Address';
import Payment from './Payment';
import Contact from './Contact';
import CheckoutButton from './Button';
import { getProfile } from "@/Redux/Features/profile/profileSlice";
import { useDispatch, useSelector } from 'react-redux';

const LeftBox = () => {

  const profileState = useSelector(state => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    // const token = window.localStorage.getItem("token");
    if (profileState.profile === null) {
      dispatch(getProfile());
    }
  }, [dispatch, profileState.profile])

  console.log(profileState)
  return (
    <Stack style={{ width: '45%', marginBottom:'130px' }} gap={3}>
      <Address addressData={profileState.profile}/>
      <Contact contactData={profileState}/>
      <Payment />
      <CheckoutButton/>
    </Stack>
  )
}

export default LeftBox
