import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "./productApi";

export const getAll = createAsyncThunk(
    'product/getAll',
    async (thunkApi) => {
        try {
            const res = await productApi.getAll();
            return res;
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const state = {
    allProduct: null,
    gettingAllProduct: false,
    getAllProductError: false
}

const productSlice = createSlice({
    name: 'product',
    initialState: state,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.pending, (state, action) => {
                state.gettingAllProduct = true;
                state.allProduct = null;
                state.getAllProductError = false;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.allProduct = action.payload;
                state.gettingAllProduct = false;
                state.getAllProductError = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.allProduct = null;
                state.gettingAllProduct = false;
                state.getAllProductError = true;
            })
    }
})

export const { } = productSlice.actions;
export default productSlice.reducer;