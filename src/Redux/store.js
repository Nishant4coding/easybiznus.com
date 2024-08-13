import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/auth/authSlice";
import profileSlice from "./Features/profile/profileSlice";
import productSlice from "./Features/product/productSlice";
import wishlistSlice from "./Features/wishlist/wishlistSlice";
import cartSlice from "./Features/cart/cartSlice";
import orderHistorySlice from "./Features/orderHistory/orderHistorySlice";
import dashboardSlice from "./Features/dashboard/dashboardSlice";
import categorySlice from "./Features/category/categorySlice";
import bannerSlice from "./Features/banner/bannerSlice";
import stockSlice from "./Features/checkout/checkStockSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    product: productSlice,
    wishlist: wishlistSlice,
    category:categorySlice,
    cart:cartSlice,
    order:orderHistorySlice,
    dashboard:dashboardSlice,
    banner: bannerSlice,
    stock: stockSlice,
  }
})

export default store;