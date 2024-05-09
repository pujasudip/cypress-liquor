import { createSlice } from "@reduxjs/toolkit";

interface MenuDetails {
  isSideMenuOpen: boolean;
}

const initialState: MenuDetails = {
  isSideMenuOpen: false,
};

const userSlice = createSlice({
  name: "menuDetails",
  initialState,
  reducers: {
    setIsSideMenuOpen: (state, action) => {
      state.isSideMenuOpen = action.payload;
    },
  },
});

export const { setIsSideMenuOpen } = userSlice.actions;
export default userSlice.reducer;
