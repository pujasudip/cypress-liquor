import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/types";

interface CartDetails {
  isCartModalOpen: boolean;
  cartItems: Product[];
  currentCartItem?: Product;
  cartCount: number;
}

const initialState: CartDetails = {
  isCartModalOpen: false,
  cartItems: [],
  cartCount: 0,
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
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
  },
});

export const {
  setIsCartModalOpen,
  setCurrentCartItem,
  setCartCount,
} = cartSlice.actions;
export default cartSlice.reducer;
