import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      email: 'admin@gmail.com',
      password: window.btoa('admin123'),
      role: 'admin'
    }
  ],
  currentUser: null,
  adminLogin: null
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
    },
    adminLogin: (state, action) => {
      state.adminLogin = action.payload
    }
  }
})

export const { addUser, userLogin, userLogout, adminLogin } = auth.actions
export default auth.reducer