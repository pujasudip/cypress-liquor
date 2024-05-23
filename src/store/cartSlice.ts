import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types";

interface CartDetails {
  isCartModalOpen: boolean;
  cartItems: Product[];
  currentCartItem?: Product;
}

const initialState: CartDetails = {
  isCartModalOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartDetails",
  initialState,
  reducers: {
    setIsCartModalOpen: (state, action) => {
      state.isCartModalOpen = action.payload;
    },
    setCurrentCartItem: (state, action) => {
      state.currentCartItem = action.payload;
    },
  },
});

export const { setIsCartModalOpen, setCurrentCartItem } = cartSlice.actions;
export default cartSlice.reducer;
