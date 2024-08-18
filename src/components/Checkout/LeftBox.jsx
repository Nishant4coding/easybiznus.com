"use client";
import { getProfile } from "@/Redux/Features/profile/profileSlice";
import { Stack } from "@mui/material";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Address from "./Address";
import CheckoutButton from "./Button";
import Contact from "./Contact";
import Payment from "./Payment";

const LeftBox = () => {
  const profileState = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (profileState.profile === null) {
      dispatch(getProfile());
    }
  }, [dispatch, profileState.profile]);

  if (!profileState) return null;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Stack style={{ width: "45%", marginBottom: "130px" }} gap={3}>
        <Address addressData={profileState.profile} />
        <Contact contactData={profileState} />
        <Payment />
        <CheckoutButton />
      </Stack>
    </Suspense>
  );
};

export default LeftBox;
