import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrderHistoryApi } from "./orderHistoryApi";

export const fetchOrders = createAsyncThunk(
  "orderHistory/fetchOrders",
  async () => {
    try {
      const response = await fetchOrderHistoryApi();
      return response; 
    } catch (error) {
      console.error('fetchOrders error:', error);
      throw error;
    }
  }
);

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const orderHistoryActions = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
