import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/auth/authSlice";
import profileSlice from "./Features/profile/profileSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice
  }
})

export default store;