import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      email: "admin@gmail.com",
      password: window.btoa("admin123"),
      role: "admin",
    },
  ],
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload.id && user.email === action.payload.email
      );
      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex],
          ...action.payload,
        };
      }
    },
  },
});

export const { addUser, updateUser } = users.actions;
export default users.reducer;