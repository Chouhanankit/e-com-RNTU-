import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Allusers from "./alluserservice";

const initialState = {
  allusers: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};
const alluserslice = createSlice({
  name: "alluser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  },
});

export default alluserslice.reducer;

export const allusers = createAsyncThunk(
    "ALL/USERS",
    async (thunkAPI) => {
      try {
        return await Allusers();
      } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
