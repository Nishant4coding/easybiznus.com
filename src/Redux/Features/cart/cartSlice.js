import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToCartApi,
  getCartApi,
  editCartItemQuantityApi,
  removeCartItemApi,
} from "./cartApi";

// Thunks
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (productDetails, { rejectWithValue }) => {
    try {
      const res = await addToCartApi(productDetails);
      return res;
    } catch (error) {
      console.error("Add to cart error:", error.message);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getCart = createAsyncThunk(
  "cart/getCart",
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
  "cart/editCartItemQuantity",
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
  "cart/removeCartItem",
  async (cartItemId, { rejectWithValue }) => {
    try {
      const res = await removeCartItemApi(cartItemId);
      return { cartItemId };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  cart: {
    items: [],
    loading: false,
    error: null,
  },
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
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
        state.cart.items.push(action.payload);
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
        state.cart = action.payload;
        state.cartTotal = action.payload.items
          .map((ele) => parseFloat(ele.salePrice * ele.quantity))
          .reduce((partialSum, a) => partialSum + a, 0);
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Edit Cart Item Quantity
      .addCase(editCartItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;

        var index = state.cart.items.findIndex(
          (item) => item.id === action.payload.cartItem.id
        );
        if (index !== -1) {
          state.cart.items[index].quantity = action.payload.cartItem.quantity;
        }

        state.cartTotal = state.cart.items
          .map((ele) => parseFloat(ele.salePrice * ele.quantity))
          .reduce((partialSum, a) => partialSum + a, 0);
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
        state.cart.items = state.cart.items.filter(
          (item) => item.id !== action.payload.cartItem.Id
        );
        state.cartTotal = state.cart.items
          .map((ele) => parseFloat(ele.salePrice * ele.quantity))
          .reduce((partialSum, a) => partialSum + a, 0);
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
