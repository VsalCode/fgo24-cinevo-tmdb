import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload)
    },
    userLogin: (state, action) => {
      state.currentUser = action.payload
    },
    userLogout: (state, action ) => {
      state.currentUser = action.payload
    }
  }
})

export const { addUser, userLogin, userLogout } = auth.actions
export default auth.reducer