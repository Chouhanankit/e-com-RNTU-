import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import productSlice from "./product/productSlice";
import alluser from "./Allusers.jsx/alluserslice";
import cartslice from "./Cart/CartSlice"


const store = configureStore({
  reducer: {
    auth: authSlice,
    products : productSlice,
    allusers : alluser,
    cart : cartslice
  },
});

export default store;
