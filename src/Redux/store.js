import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/auth/authSlice";
import profileSlice from "./Features/profile/profileSlice";
import productSlice from "./Features/product/productSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    product: productSlice
  }
})

export default store;