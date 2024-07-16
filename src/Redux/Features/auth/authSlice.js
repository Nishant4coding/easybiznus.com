import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from './authApi';

export const login = createAsyncThunk(
    "auth/login",
    async(credentials, thunkAPI)=>{
        try{
            const res = await authApi.login(credentials);
            if(!res){
                return thunkAPI.rejectWithValue(error);    
            }
        }
        catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const register = createAsyncThunk(
    "auth/register",
    async(userData, thunkAPI)=>{
        console.log(userData);
        try{
            const res = await authApi.register(userData);
            if(!res){
                return thunkAPI.rejectWithValue(error);    
            }
        }
        catch(err){
            return thunkAPI.rejectWithValue(err);
        }
    }
)

export const profile = createAsyncThunk(
    "auth/profile",
    async(token, thunkAPI)=>{
        try{
            const res = await authApi.profile(token);
            if(!res){
                return thunkAPI.rejectWithValue(error);    
            }
            return res;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)


export const requestOTP = createAsyncThunk(
    "auth/requestOTP",
    async(phoneNumber, thunkAPI) => {
        try {
            const res = await authApi.requestOTP(phoneNumber);
            if (!res) {
                return thunkAPI.rejectWithValue("Failed to request OTP");
            }
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async({ emailOrMobile, otpValue, newPassword, id }, thunkAPI) => {
        try {
            const res = await authApi.resetPassword({ emailOrMobile, otpValue, newPassword, id });
            if (!res) {
                return thunkAPI.rejectWithValue("Failed to reset password");
            }
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    user: {},
    otpRequested: false,
    passwordReset: false,
}

const authSlice  = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(login.fulfilled, (state)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            console.log("Fullfill",state)
        })
        .addCase(login.rejected, (state)=>{
            state.isError=true;
            state.isLoading=false;
        })
        .addCase(register.pending, (state)=>{
            state.isLoading=true;
        })
        .addCase(register.fulfilled, (state)=>{
            state.isSuccess=true;
            state.isLoading=false;
            state.isError=false;
            console.log("Fullfill",state)
        })
        .addCase(register.rejected, (state)=>{
            state.isError=true;
            state.isLoading=false;
        })
        .addCase(profile.fulfilled,(state, action)=>{
            state.user = action.payload;
        })
        .addCase(requestOTP.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(requestOTP.fulfilled, (state) => {
            state.isLoading = false;
            state.otpRequested = true;
            state.isError = false;
        })
        .addCase(requestOTP.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        })
        .addCase(resetPassword.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(resetPassword.fulfilled, (state) => {
            state.isLoading = false;
            state.passwordReset = true;
            state.isError = false;
        })
        .addCase(resetPassword.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        });
    }
})

export const authUser = (state)=>state.auth;
export default authSlice.reducer;