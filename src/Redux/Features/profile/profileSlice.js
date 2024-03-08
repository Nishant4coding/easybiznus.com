import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileApi from "./profileApi";

export const getProfile = createAsyncThunk(
    'profile/get',
    async (thunkApi) => {
        try {
            const res = await profileApi.getProfile();
            return res;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const updateProfile = createAsyncThunk(
    'profile/put',
    async (data, thunkApi) => {
        try {
            const res = await profileApi.updateProfile(data);
            return res;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

const state = {
    profile: null,
    gettingProfile: true,
    gettingProfileError: false,
    updatingProfile: false,
    updatingProfileError: false
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: state,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state, action) => {
                state.gettingProfile = true;
                state.profile = null;
                state.gettingProfileError = false;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.gettingProfile = false;
                state.profile = action.payload;
                state.gettingProfileError = false;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.gettingProfile = false;
                state.profile = null;
                state.gettingProfileError = true;
            })
            .addCase(updateProfile.pending, (state, action) => {
                state.updatingProfile = true;
                state.profile = null;
                state.updatingProfileError = false;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.updatingProfile = false;
                state.profile = action.payload;
                state.updatingProfileError = false;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.updatingProfile = false;
                state.profile = null;
                state.updatingProfileError = true;
            })
    }
})

export const { } = profileSlice.actions;
export default profileSlice.reducer;