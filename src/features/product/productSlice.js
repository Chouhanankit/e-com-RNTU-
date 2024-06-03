import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  allproducts, createproduct, singleproduct } from "./productService";

const initialState = {
  products: null,
  product: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getproducts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
        state.isError = false;
      })
      .addCase(getproducts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })

      .addCase(createproducts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(createproducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
        state.isError = false;
      })
      .addCase(createproducts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      });

    //       .addCase(getSingleProducts.pending, (state) => {
    //         state.isLoading = true;
    //         state.isSuccess = false;
    //         state.isError = false;
    //       })
    //       .addCase(getSingleProducts.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.isSuccess = true;
    //         state.products = action.payload;
    //         state.isError = false;
    //       })
    //       .addCase(getSingleProducts.rejected, (state, action) => {
    //         state.isError = true;
    //         state.isLoading = false;
    //         state.isSuccess = false;
    //         state.message = action.payload;
    //       });
  },
});

export default productSlice.reducer;

// export const createproducts = createAsyncThunk(
//   "ALL/PRODUCTS",
//   async (formData, thunkAPI) => {
//     try {
//       return await createpro;
//     } catch (error) {
//       const message = error.response.data.message;
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const getproducts = createAsyncThunk(
  "ALL/PRODUCTS",
  async (thunkAPI) => {
    try {
      return await allproducts();
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createproducts = createAsyncThunk(
  "SINGLE/PRODUCT",
  async (formData, thunkAPI) => {
    try {
      console.log(object)
      return await createproduct(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSingleproducts = createAsyncThunk(
  "SINGLE/PRODUCT",
  async (id, thunkAPI) => {
    try {
      return await singleproduct(id);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
