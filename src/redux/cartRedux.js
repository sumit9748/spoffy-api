import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;

    },
    updateProduct: (state, action) => {
      state.products = action.payload
    },
    clearCart: (state) => {
      state.products = [];
    }
  },
});

export const { addProduct, updateProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;