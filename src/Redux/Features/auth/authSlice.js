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

const initialState = {
    isLoading: false,
    isSuccess : false,
    isError:false,
    user:{}
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
    }
})

export const authUser = (state)=>state.auth;
export default authSlice.reducer;