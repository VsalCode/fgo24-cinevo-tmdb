import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload)
    }
  }
})

export const { addUser } = auth.actions
export default auth.reducer