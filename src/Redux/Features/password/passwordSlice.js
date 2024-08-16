import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestOTP, resetPassword } from "./passwordApi";

// Thunks
export const requestOTPThunk = createAsyncThunk(
  "password/requestOTP",
  async (email, { rejectWithValue }) => {
    try {
      const response = await requestOTP(email);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  "password/resetPassword",
  async ({ emailOrMobile, otpValue, newPassword, id }, { rejectWithValue }) => {
    try {
      const response = await resetPassword(
        emailOrMobile,
        otpValue,
        newPassword,
        id
      );
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const initialState = {
  loading: false,
  otpRequested: false,
  resetSuccess: false,
  error: null,
};

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.otpRequested = false;
      state.resetSuccess = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Request OTP
      .addCase(requestOTPThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestOTPThunk.fulfilled, (state) => {
        state.loading = false;
        state.otpRequested = true;
      })
      .addCase(requestOTPThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Reset Password
      .addCase(resetPasswordThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPasswordThunk.fulfilled, (state) => {
        state.loading = false;
        state.resetSuccess = true;
      })
      .addCase(resetPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearState } = passwordSlice.actions;

export default passwordSlice.reducer;
