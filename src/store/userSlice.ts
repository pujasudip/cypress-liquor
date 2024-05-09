import { createSlice } from "@reduxjs/toolkit";

interface UserDetails {
  name: string;
}

const initialState: UserDetails = {
  name: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
