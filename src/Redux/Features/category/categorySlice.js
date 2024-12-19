import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoryApi";

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCategories();
      return response;
    } catch (error) {
      console.error("fetchCategories error:", error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
