import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductByIdOnly, getAll } from "./productApi";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAll([]);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await getProductByIdOnly(id);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
    loading: false,
    error: null,
    selectedProduct: [],
    loadingProduct: false,
    productError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.loading = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getProductById.pending, (state) => {
        state.loadingProduct = true;
        console.log(state);
        state.productError = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        console.log(action.payload);
        state.loadingProduct = false;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.productError = action.payload;
        state.loadingProduct = false;
      });
  },
});

export default productSlice.reducer;
