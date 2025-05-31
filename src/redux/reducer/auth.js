import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  adminLogin: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.currentUser = action.payload;
    },
    userLogout: (state) => {
      state.currentUser = null;
    },
    adminLogin: (state, action) => {
      state.adminLogin = action.payload;
    },
  },
});

export const { userLogin, userLogout, adminLogin } = auth.actions;
export default auth.reducer;