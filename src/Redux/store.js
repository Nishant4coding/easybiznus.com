import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/auth/authSlice";
import profileSlice from "./Features/profile/profileSlice";
import productSlice from "./Features/product/productSlice";
import wishlistSlice from "./Features/wishlist/wishlistSlice";
import cartSlice from "./Features/cart/cartSlice";
import orderHistorySlice from "./Features/orderHistory/orderHistorySlice";
import productSliceCat from './Features/category/categorySlice'
import dashboardSlice from "./Features/dashboard/dashboardSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    product: productSlice,
    wishlist: wishlistSlice,
    category:productSliceCat,
    cart:cartSlice,
    order:orderHistorySlice,
    dashboard:dashboardSlice
  }
})

export default store;