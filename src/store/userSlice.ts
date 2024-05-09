import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserDetails {
  isLoggedIn: boolean;
}

const initialState: UserDetails = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;
