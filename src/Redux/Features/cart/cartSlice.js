import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCartApi, getCartApi, editCartItemQuantityApi, removeCartItemApi } from "./cartApi";

// Thunks
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (productDetails, { rejectWithValue }) => {
    try {
      const res = await addToCartApi(productDetails);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCart = createAsyncThunk(
  'cart/getCart',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getCartApi();
     
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const editCartItemQuantity = createAsyncThunk(
  'cart/editCartItemQuantity',
  async ({ cartItemId, quantity }, { rejectWithValue }) => {
    try {
      const res = await editCartItemQuantityApi(cartItemId, quantity);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeCartItem = createAsyncThunk(
  'cart/removeCartItem',
  async (cartItemId, { rejectWithValue }) => {
    try {
      const res = await removeCartItemApi(cartItemId);
      return { cartItemId };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state
const initialState = {
  cart: [],
  loading: false,
  error: null,
};

// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get Cart
      .addCase(getCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.items; 
        console.log("Fulfilled: ", action.payload); 
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("Rejected: ", action.payload);
      })
      // Edit Cart Item Quantity
      .addCase(editCartItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.cart.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.cart[index] = action.payload;
        }
      })
      .addCase(editCartItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Remove Cart Item
      .addCase(removeCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = state.cart.filter(item => item.id !== action.payload.cartItemId);
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
