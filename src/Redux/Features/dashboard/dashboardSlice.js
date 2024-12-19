import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchDashboardApi from "@/Redux/Features/dashboard/dashboardApi";

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetch",
  async (_, thunkApi) => {
    try {
      const data = await fetchDashboardApi([]);
      return data;
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      return thunkApi.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const initialState = {
  dashboardData: null,
  fetchingDashboardData: false,
  fetchDashboardError: false,
  errorMessage: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.fetchingDashboardData = true;
        state.dashboardData = null;
        state.fetchDashboardError = false;
        state.errorMessage = null;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.fetchingDashboardData = false;
        state.dashboardData = action.payload;
        state.fetchDashboardError = false;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.fetchingDashboardData = false;
        state.dashboardData = null;
        state.fetchDashboardError = true;
        state.errorMessage = action.payload || "An error occurred";
      });
  },
});

export default dashboardSlice.reducer;
