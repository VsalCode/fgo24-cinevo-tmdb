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
      state.users.push(action.payload);
    },
    userLogin: (state, action) => {
      state.currentUser = action.payload;
    },
    userLogout: (state) => {
      if (state.currentUser) {
        const userIndex = state.users.findIndex(
          (user) =>  user.id === state.currentUser.id && user.email === state.currentUser.email
        );
        if (userIndex !== -1) {
          state.users[userIndex] = {
            ...state.users[userIndex], // (1) Pertama, ambil semua data user yang lama
            ...state.currentUser, // (2) Lalu timpa dengan data terbaru dari currentUser
          };
        }
      }
      state.currentUser = null;
    },
    adminLogin: (state, action) => {
      state.adminLogin = action.payload;
    },
  },
});

export const { addUser, userLogin, userLogout, adminLogin } = auth.actions
export default auth.reducer