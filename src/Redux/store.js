import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/auth/authSlice";
import profileSlice from "./Features/profile/profileSlice";
import productSlice from "./Features/product/productSlice";
import categorySlice from "./Features/category/categorySlice";
import wishlistSlice from "./Features/wishlist/wishlistSlice";
import cartSlice from "./Features/cart/cartSlice";
import bannerSlice from "./Features/banner/bannerSlice";
import dashboardSlice from "./Features/dashboard/dashboardSlice";
import passwordSlice from "./Features/password/passwordSlice";
import orderSlice from "./Features/orders/orderSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    product: productSlice,
    category: categorySlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    banner: bannerSlice,
    dashboard: dashboardSlice,
    password: passwordSlice,
    order: orderSlice,
  },
});

export default store;
