import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const usersExist = JSON.parse(localStorage.getItem("users"));
const initialState = {
  users: usersExist ? usersExist : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(usersRegister.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.users = null;
        state.isError = false;
      })
      .addCase(usersRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
        state.isError = false;
      })
      .addCase(usersRegister.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.users = null;
        state.message = action.payload;
      })
      .addCase(usersLogin.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.users = null;
        state.isError = false;
      })
      .addCase(usersLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
        state.isError = false;
      })
      .addCase(usersLogin.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.users = null;
        state.message = action.payload;
      })
      .addCase(usersLogOut.fulfilled, (state) => {
        state.users = null;
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

export default authSlice.reducer;

export const usersRegister = createAsyncThunk(
  "REGISTER",
  async (formData, thunkAPI) => {
    try {
      return await authService.register(formData);
    } catch (error) {
      const message = error || error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const usersLogin = createAsyncThunk(
  "LOGIN",
  async (formData, thunkAPI) => {
    try {
      return await authService.login(formData);
    } catch (error) {
      const message =error || error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const usersLogOut = createAsyncThunk("LOGOUT", async () => {
  return localStorage.removeItem("users");
});
