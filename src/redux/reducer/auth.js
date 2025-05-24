import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: []
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload)
    },
    userLogin: (state, action) => {
      state.currentUser.push(action.payload)
    }
  }
})

export const { addUser, userLogin } = auth.actions
export default auth.reducer