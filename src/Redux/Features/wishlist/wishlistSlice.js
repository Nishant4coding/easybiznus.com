import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToWishlistApi, getWishlistApi, removeWishlistItemApi } from './wishlistApi';

export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async (_, thunkApi) => {
    try {
      const userId = thunkApi.getState().auth.user.id;
      const res = await getWishlistApi(userId);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);

export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async ({ productId }, thunkApi) => {
    try {
      const userId = thunkApi.getState().auth.user.id;
      const res = await addToWishlistApi(userId, productId);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);

export const removeFromWishlist = createAsyncThunk(
  'wishlist/removeFromWishlist',
  async ({ productId }, thunkApi) => {
    try {
      const userId = thunkApi.getState().auth.user.id;
      const res = await removeWishlistItemApi(userId, productId);
      return { productId };
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeFromWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.productId !== action.payload.productId);
        state.loading = false;
        state.error = null;
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default wishlistSlice.reducer;
