import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    CartItems: [],
  },
  reducers: {
    add: (state, action) => {
      const existingItem = state.CartItems.find(item => item._id === action.payload._id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.CartItems.push({ ...action.payload, qty: 1 });
      }
    },
    remove: (state, action) => {
      state.CartItems = state.CartItems.filter(item => item._id !== action.payload);
    },
    increase: (state, action) => {
      const item = state.CartItems.find(item => item._id === action.payload);
      if (item) {
        item.qty += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.CartItems.find(item => item._id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
  },
});

export const { add, remove, increase, decrease } = CartSlice.actions;

export default CartSlice.reducer;
