import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import addressApi from './addressApi';

export const createAddress = createAsyncThunk(
  'address/create',
  async (addressData, thunkAPI) => {
    try {
      const response = await addressApi.createAddress(addressData);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateAddress = createAsyncThunk(
  'address/update',
  async (addressData, thunkAPI) => {
    try {
      const response = await addressApi.updateAddress(addressData);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteAddress = createAsyncThunk(
  'address/delete',
  async (addressId, thunkAPI) => {
    try {
      const response = await addressApi.deleteAddress(addressId);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  addresses: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.addresses.push(action.payload);

      })
      .addCase(createAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(updateAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        const index = state.addresses.findIndex((addr) => addr.id === action.payload.id);
        if (index !== -1) {
          state.addresses[index] = action.payload;
        }
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.addresses = state.addresses.filter((addr) => addr.id !== action.payload.id);
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const selectAddresses = (state) => state.address.addresses;
export const selectAddressLoading = (state) => state.address.isLoading;
export const selectAddressSuccess = (state) => state.address.isSuccess;
export const selectAddressError = (state) => state.address.isError;
export const selectAddressErrorMessage = (state) => state.address.errorMessage;

export default addressSlice.reducer;
