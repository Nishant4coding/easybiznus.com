import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { checkStockApi } from './checkStockApi';

export const checkStock = createAsyncThunk('cart/checkStock', async (_, thunkAPI) => {
  try {
    const response = await checkStockApi();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const stockSlice = createSlice({
  name: 'stock',
  initialState: {
    stock: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkStock.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkStock.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(checkStock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default stockSlice.reducer;
