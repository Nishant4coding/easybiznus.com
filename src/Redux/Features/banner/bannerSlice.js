import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchActiveAdvertisements } from './bannerApi';

export const getActiveAdvertisements = createAsyncThunk(
  'banner/getActiveAdvertisements',
  async (_, thunkAPI) => {
    try {
      const response = await fetchActiveAdvertisements();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);

const initialState = {
  banners: [],
  loading: false,
  error: null,
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActiveAdvertisements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getActiveAdvertisements.fulfilled, (state, action) => {
        state.banners = action.payload;
        state.loading = false;
      })
      .addCase(getActiveAdvertisements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bannerSlice.reducer;
